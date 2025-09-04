import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((value) => value + 1);
  }

  function handleDecrement() {
    setCount((value) => value - 1);
  }

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text
        className={
          count >= 0
            ? "text-[120px] font-bold text-green-500"
            : "text-[120px] font-bold text-red-500"
        }
      >
        {count}
      </Text>
      <View className="flex-row gap-x-20 mt-12">
        <Pressable onPress={handleIncrement} className="h-20">
          <Text className="text-6xl">+</Text>
        </Pressable>
        <Pressable onPress={handleDecrement} className="h-20">
          <Text className="text-7xl">-</Text>
        </Pressable>
      </View>
    </View>
  );
}
