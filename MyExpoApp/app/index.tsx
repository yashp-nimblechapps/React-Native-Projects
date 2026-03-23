import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./screens/ProfileScreen";
import CourseListsScreen from "./screens/CourseListScreen";
import SettingsScreen from "./screens/SettingsScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AboutStack } from "./indexStack";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelPosition: "below-icon",
                tabBarShowLabel: true,
                tabBarActiveTintColor: "purple"
            }}
        >
            <Tab.Screen name="Course List" component={CourseListsScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarLabel: "My Profile",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person" size={20} color={color}/>                        
                    ),
                    tabBarBadge: 3,
                    
                }}
            />
            <Tab.Screen name="Settings" component={SettingsScreen}/>
            <Tab.Screen name="AboutStack" component={AboutStack} options={{
                headerShown: false,
            }}/>
        </Tab.Navigator>
    )
}