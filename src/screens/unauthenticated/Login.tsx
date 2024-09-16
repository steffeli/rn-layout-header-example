import { Button } from "@react-navigation/elements";
import { View, Text } from "react-native";

export function LoginScreen() {
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'lightblue',
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>LOGIN</Text>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button>Login</Button>
      </View>
    </View>
  );
}
