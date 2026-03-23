import { Slot } from "expo-router";
import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthLayout() {
  return (
      <SafeAreaView style={styles.container}>
       <Image 
        source={require("../../assets/images/react-logo.png")}
       />
      <Slot />
      </SafeAreaView>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 100,
    height: 100,
  },
});