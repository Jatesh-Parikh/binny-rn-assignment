import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StatusBar,
  Text,
  View,
} from "react-native";

const posts = [
  {
    id: 1,
    title: "Understanding Flexbox in React Native",
    content:
      "Learn how to use Flexbox to create responsive layouts in your React Native apps.",
  },
  {
    id: 2,
    title: "Getting Started with Expo",
    content:
      "A beginner's guide to setting up and running React Native projects using Expo.",
  },
  {
    id: 3,
    title: "NativeWind for Styling React Native Apps",
    content:
      "How to style your React Native components easily using TailwindCSS and NativeWind.",
  },
  {
    id: 4,
    title: "Building Reusable Components",
    content:
      "Tips and techniques to build reusable and maintainable components in React Native.",
  },
  {
    id: 5,
    title: "Navigation in React Native",
    content:
      "An introduction to React Navigation for managing screens and routes in your app.",
  },
  {
    id: 6,
    title: "Handling User Input",
    content:
      "Learn how to manage form inputs and two-way binding in React Native.",
  },
  {
    id: 7,
    title: "Using Expo Linear Gradient",
    content:
      "Enhance your app UI by adding beautiful gradient backgrounds using Expo Linear Gradient.",
  },
  {
    id: 8,
    title: "Working with ScrollView and FlatList",
    content:
      "Efficient ways to render lists and scrollable content in React Native apps.",
  },
  {
    id: 9,
    title: "Debugging React Native Apps",
    content:
      "Learn how to debug your React Native app using Expo tools and Chrome DevTools.",
  },
  {
    id: 10,
    title: "Optimizing Performance",
    content:
      "Best practices for optimizing performance and improving the user experience in React Native.",
  },
];

export default function Index() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    if (layoutMeasurement.height + contentOffset.y >= contentSize.height - 10) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  return (
    <LinearGradient
      colors={["#ffffff", "#dad9db"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1"
    >
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View className="bg-transparent bg-opacity-10 rounded-xl p-4 mt-10">
        <Text className="text-black text-2xl font-bold tracking-wide text-center">
          My Posts
        </Text>
      </View>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View className="bg-white/75 p-4 rounded-xl shadow-md mb-4 border border-gray-200 mx-auto w-96">
            <Text className="text-gray-900 text-lg font-semibold mb-1">
              {item.title}
            </Text>
            <Text className="text-gray-600 text-sm">{item.content}</Text>
          </View>
        )}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}
        ListFooterComponent={
          isAtBottom ? (
            <View className="bg-transparent rounded-xl p-4 mb-4">
              <Text className="text-black text-2xl font-bold tracking-wide text-center">
                End of List
              </Text>
            </View>
          ) : null
        }
      />
    </LinearGradient>
  );
}
