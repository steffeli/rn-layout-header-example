import { Button } from "@react-navigation/elements";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ChainHeaderProps = NativeStackHeaderProps;

export function ChainHeader({
  back,
  options,
  navigation,
  route,
}: ChainHeaderProps) {
  const navigateToHome = () => navigation.popToTop();
  return (
    <SafeAreaView style={{ minHeight: 80, backgroundColor: "yellow" }}>
      <Text style={{ color: "black", textAlign: "center" }}>
        {options.title}
      </Text>
      <Button onPressIn={navigateToHome}>Home</Button>
    </SafeAreaView>
  );
}
