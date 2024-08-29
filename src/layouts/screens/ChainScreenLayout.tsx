import { ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScrollView, View } from "react-native";

type LayoutProps = {
  route: RouteProp<ParamListBase, string>;
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
  theme: ReactNavigation.Theme;
  children: React.ReactElement;
};

export function ChainScreenLayout({
  route,
  navigation,
  theme,
  children,
}: LayoutProps) {
  return (
    <ScrollView style={{ padding: 30, backgroundColor: "red" }}>
      {children}
    </ScrollView>
  );
}
