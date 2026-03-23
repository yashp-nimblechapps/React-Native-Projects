import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { Pressable, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export const AboutStack = () => {
  return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
              backgroundColor: "#6a51ae"
            },
            headerTitleStyle: { fontWeight: "bold", color: "white"},
            headerRight: () => (
              <Pressable onPress={() => {
                alert("Menu button pressed");
              }}>
                <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
              </Pressable>
            ),
            contentStyle: {
              backgroundColor: "#e8e4f3"
            },
      }}>
        <Stack.Screen name= "Home" component={HomeScreen}
          options={{title: "Welcome Home"}}
        />
        <Stack.Screen 
          name= "About" 
          component={AboutScreen} 
          initialParams={{
            name: "Guest"
          }} 
          //options={({ route }) => ({
          //  title: route.params?.name,
          //})}
        />

      </Stack.Navigator>
  );
};



export default function App() {
  return (
    <NavigationContainer>
      <AboutStack />
    </NavigationContainer>

  );
}
