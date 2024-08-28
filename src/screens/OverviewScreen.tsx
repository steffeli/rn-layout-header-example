import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

export function OverviewScreen() {
  const { navigate } = useNavigation();

  const navigateToPaymentsScreen = () => navigate("Payments");
  const navigateToTransfersScreen = () => navigate("Transfers");
  const navigateToChainScreens = () => navigate("ChainOne");

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <Text>Overview Screen</Text>
      <Button onPressIn={navigateToPaymentsScreen}>Go to Payments</Button>
      <Button onPressIn={navigateToTransfersScreen}>Go to Transfers</Button>
      <Button onPressIn={navigateToChainScreens}>Go to Chain</Button>
    </View>
  );
}
