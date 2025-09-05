import { Post } from "@/lib/types";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setPost(response.data);
        setError("");
        setLoading(false);
      } catch (err) {
        setError("Error fetching the post");
        setLoading(false);
      }
    }
    fetchPost();
  }, [id]);

  return (
    <>
      {loading && (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" />
        </View>
      )}

      {error && (
        <View className="flex-1 justify-center items-center">
          <Text className="text-red-500 text-center font-light">
            {error}. Please try again after sometime
          </Text>
        </View>
      )}

      {post && (
        <View className="flex-1 bg-white p-4">
          <Text className="text-2xl font-bold text-gray-900">{post.title}</Text>
          <Text className="text-base text-gray-700 mt-10">{post.body}</Text>
        </View>
      )}
    </>
  );
}
