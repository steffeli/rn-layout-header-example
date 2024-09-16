import { Button } from "@react-navigation/elements";
import { View, Text } from "react-native";

export function LogoutScreen() {
    return (
        <View
            style={{
                flex: 1,
                padding: 10,
                alignItems: 'center',
                backgroundColor: 'lightblue',
            }}
        >
            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>LOGOUT</Text>
            <View style={{ flex: 1, justifyContent: 'center' }}>
            </View>
        </View>
    );
}
