import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScrollView, Text } from "react-native";

type LayoutProps = {
  route: RouteProp<ParamListBase, string>;
  navigation:
    | NativeStackNavigationProp<ParamListBase, string, undefined>
    | BottomTabNavigationProp<ParamListBase, string, undefined>;
  theme: ReactNavigation.Theme;
  children: React.ReactElement;
};

export function SpecialScreenLayout({
  route,
  navigation,
  theme,
  children,
}: LayoutProps) {
  return (
    <ScrollView style={{ padding: 10, backgroundColor: "blue" }}>
      <Text style={{ textAlign: "center", color: "white", fontWeight: "800" }}>
        Special case
      </Text>
      {children}
    </ScrollView>
  );
}
