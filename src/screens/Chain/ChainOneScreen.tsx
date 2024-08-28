import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

export function ChainOneScreen() {
  const { navigate } = useNavigation();
  const navigateToNext = () => navigate("ChainTwo");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Chain One Screen</Text>
      <Button onPressIn={navigateToNext}>Go to next</Button>
    </View>
  );
}
