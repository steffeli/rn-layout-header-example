import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

export function PaymentsScreen() {
  const { setOptions } = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Payments Screen</Text>
    </View>
  );
}
