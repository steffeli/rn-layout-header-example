import type { StaticParamList } from "@react-navigation/native";
import { HomeTabs, RootStack } from "./RootStack";

type RootStackParamList = StaticParamList<typeof RootStack>;
type BottomTabStackParamList = StaticParamList<typeof HomeTabs>;

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends RootStackParamList,
        BottomTabStackParamList {}
  }
}
