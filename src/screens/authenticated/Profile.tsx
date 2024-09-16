import { Button } from "@react-navigation/elements";
import { View, Text } from "react-native";

export function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>PROFILE</Text>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button>Logout</Button>
      </View>
    </View>
  );
}
