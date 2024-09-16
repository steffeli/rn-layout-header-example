import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { Screens } from "navigation/Screens";
import { View, Text } from "react-native";

export function HomeScreen() {
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>HOME</Text>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button onPressIn={() => navigate(Screens.PROFILE)}>Profile</Button>
      </View>
    </View>
  );
}
