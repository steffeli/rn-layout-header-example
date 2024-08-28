import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

export function ChainThreeScreen() {
  const { navigate } = useNavigation();
  const navigateToNext = () => navigate("ChainFour");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Chain Three Screen</Text>
      <Button onPressIn={navigateToNext}>Go to next</Button>
    </View>
  );
}
