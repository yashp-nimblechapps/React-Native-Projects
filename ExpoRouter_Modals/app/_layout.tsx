import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen 
        name="modal" 
        options={{ title: "Modal",presentation: "fullScreenModal"}} 
      />

      <Stack.Screen 
        name="webmodal" 
        options={{
           title: "Web Modal", 
           presentation: "transparentModal", 
           animation: "fade", 
           headerShown: false
        }} 
      />
    </Stack>
  );
}