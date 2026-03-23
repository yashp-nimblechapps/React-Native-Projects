import { View , Text} from "react-native";

export default function Greet({name} : any) {
    return (
        <View>
            <Text>Hello, {name} </Text>
        </View>
    );
}