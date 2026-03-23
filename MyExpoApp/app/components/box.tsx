import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { ReactNode } from 'react';

type BoxProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
};

export default function Box({ children, style }: BoxProps) {
    return (
        <View style={[styles.box, style]}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        height: 90,
        width: 90,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
    }
});