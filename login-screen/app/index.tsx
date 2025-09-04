import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Text } from "@/components/ui/text";
import { useState } from "react";
import { Alert, View } from "react-native";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handlePress() {
    Alert.alert(
      "Your credentials are: ",
      `Email: ${email} \nPassword: ${password}`
    );

    setEmail("");
    setPassword("");
  }

  return (
    <View className="flex-1 justify-center items-center relative">
      <Card className="w-full max-w-sm flex flex-col justify-between gap-8">
        <CardHeader className="flex-row">
          <View className="flex-1 gap-1.5">
            <CardTitle className="text-2xl">Enter your details</CardTitle>
          </View>
        </CardHeader>
        <CardContent>
          <View className="w-full justify-center gap-8">
            <View className="gap-2">
              <Label htmlFor="email" className="text-xl">
                Email
              </Label>
              <Input
                value={email}
                onChangeText={setEmail}
                id="email"
                placeholder="m@example.com"
              />
            </View>
            <View className="gap-2">
              <Label htmlFor="password" className="text-xl">
                Password
              </Label>
              <Input
                value={password}
                onChangeText={setPassword}
                id="password"
                placeholder="Password"
              />
            </View>
          </View>
        </CardContent>
        <CardFooter className="flex-col gap-4">
          <Button
            variant="outline"
            className="w-full py-2"
            size="lg"
            onPress={handlePress}
          >
            <Text className="text-xl">Login</Text>
          </Button>
        </CardFooter>
      </Card>
    </View>
  );
}
