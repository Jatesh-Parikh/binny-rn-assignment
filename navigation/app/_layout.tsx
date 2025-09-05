import { Stack } from "expo-router";

import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Posts" }} />
      <Stack.Screen name="details/[id]" options={{ title: "Post Details" }} />
    </Stack>
  );
}
