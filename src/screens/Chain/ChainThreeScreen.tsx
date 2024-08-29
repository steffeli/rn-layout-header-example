import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

export function ChainThreeScreen() {
  const { navigate, setOptions } = useNavigation();
  const navigateToNext = () => navigate("ChainFour");
  const changeHeader = () => setOptions({ title: "hallo?" });
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Chain Three Screen</Text>
      <Button onPressIn={changeHeader}>Change Header</Button>
      <Button onPressIn={navigateToNext}>Go to next</Button>
    </View>
  );
}
