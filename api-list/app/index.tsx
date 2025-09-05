import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export default function Index() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
        setLoading(false);
        setError("");
      } catch (err) {
        setLoading(false);
        setError("Something went wrong");
      }
    }

    fetchPosts();
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      {loading && (
        <View className="flex-1 justify-evenly items-center">
          <Skeleton className="w-96 h-96 rounded-xl my-4" />
          <Skeleton className="w-96 h-96 rounded-xl my-4" />
          <Skeleton className="w-96 h-96 rounded-xl my-4" />
          <Skeleton className="w-96 h-96 rounded-xl my-4" />
          <Skeleton className="w-96 h-96 rounded-xl my-4" />
        </View>
      )}

      {error && (
        <View className="flex-1 justify-center items-center">
          <Text className="text-red-500 text-center font-light">
            {error}. Please try again after sometime
          </Text>
        </View>
      )}

      {posts && (
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <Card className="w-96 mx-auto rounded-md border border-black/50 bg-white p-4 my-4 overflow-hidden">
              <CardHeader className="flex flex-col gap-3 px-6 py-5">
                <CardTitle className="text-lg font-semibold text-gray-900 tracking-tight">
                  {item.title.charAt(0).toUpperCase() + item.title.slice(1, 25)}
                  ...
                </CardTitle>
                <CardDescription className="mt-2 text-sm text-gray-600 leading-relaxed break-words">
                  {item.body.slice(0, 100)}...
                </CardDescription>
              </CardHeader>
            </Card>
          )}
        />
      )}
    </View>
  );
}
