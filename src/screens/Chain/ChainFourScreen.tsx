import { Button } from "@react-navigation/elements";
import { StackActions, useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

export function ChainFourScreen() {
  const { dispatch } = useNavigation();
  const navigateToNext = () => dispatch(StackActions.popToTop);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Chain One Screen</Text>
      <Button onPressIn={navigateToNext}>Go to Home</Button>
    </View>
  );
}
