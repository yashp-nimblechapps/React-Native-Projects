import "react-native-gesture-handler"
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from "./screens/Dashboard";
import SettingsScreen from "./screens/SettingsScreen";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen 
                name="Dashboard" 
                component={DashboardScreen}
                options={{
                    title: "My dashboard",
                    drawerLabel: "Dashboard label",
                    drawerActiveTintColor: "#333",
                    drawerActiveBackgroundColor: "lightblue",
                    drawerContentStyle: {
                        backgroundColor: "#c6cbef"
                    }

                }}
            />
            <Drawer.Screen name="Settings" component={SettingsScreen}/>
        </Drawer.Navigator>


    );
}