import { Text, View, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Text>Hello World</Text>
      <Link href="/about">About</Link>
      <Link href="./profile/">Profile</Link>
      <Link href="./products">Products</Link>
      <Link href="./missing-route">Missing Route</Link>
      <Link href="./login">Login</Link>

      <Link href="./forgot-password" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Forgot-Password</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0ea5e9",
    padding: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: "white",
    fontSize: 16
  }
})
