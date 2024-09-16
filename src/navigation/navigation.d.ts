import type { StaticParamList } from "@react-navigation/native";
import { BottomTabs, RootStack } from "./RootStack";

type RootStackParamList = StaticParamList<typeof RootStack>;
type BottomTabStackParamList = StaticParamList<typeof BottomTabs>;

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends RootStackParamList,
      BottomTabStackParamList { }
  }
}
