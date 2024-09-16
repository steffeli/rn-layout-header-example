import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { Screens } from "navigation/Screens";
import { View, Text } from "react-native";

export function BankIntroScreen() {
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'lightblue',
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>BANK INTRO</Text>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button onPressIn={() => navigate(Screens.BANKID)}>BankID</Button>
      </View>
    </View>
  );
}
