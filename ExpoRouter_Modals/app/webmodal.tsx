import { Link } from "expo-router"
import { Pressable, Text } from "react-native";
import Animated, { FadeIn, SlideInDown} from "react-native-reanimated";

export default function WebModal(){
    return(
        <Animated.View
            entering={FadeIn}
            style={{
                flex:1,
                justifyContent: "center",
                alignItems: 'center',
                backgroundColor: "#00000040",
            }}
        >
            {/* Dimiss modal when pressing outside*/}
            <Link dismissTo href={"/"} asChild>
                <Pressable />
            </Link>
            <Animated.View  
                entering={SlideInDown}
                style={{
                    width: "90%",
                    height: "80%",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                }}
            >
                <Text style= {{ fontWeight: "bold", marginBottom: 10 }}>
                    Modal Screen
                </Text>
                <Link dismissTo href="/">
                    <Text>← Go back</Text>
                </Link>
            </Animated.View>
        </Animated.View>
    );
}