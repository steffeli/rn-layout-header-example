import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

export function ChainTwoScreen() {
  const { navigate } = useNavigation();
  const navigateToNext = () => navigate("ChainThree");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Chain Two Screen</Text>
      <Button onPressIn={navigateToNext}>Go to next</Button>
    </View>
  );
}
