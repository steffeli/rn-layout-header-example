import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChainScreenLayout } from "layouts/ChainScreenLayout";
import { DefaultScreenLayout } from "layouts/DefaultScreenLayout";
import React from "react";
import { ChainFourScreen } from "screens/Chain/ChainFourScreen";
import { ChainOneScreen } from "screens/Chain/ChainOneScreen";
import { ChainThreeScreen } from "screens/Chain/ChainThreeScreen";
import { ChainTwoScreen } from "screens/Chain/ChainTwoScreen";
import { OverviewScreen } from "screens/OverviewScreen";
import { PaymentsScreen } from "screens/PaymentsScreen";
import { TransfersScreen } from "screens/TransfersScreen";

export const HomeTabs = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Overview: OverviewScreen,
    Payments: PaymentsScreen,
    Transfers: {
      screen: TransfersScreen,
      options: {
        title: "Not Transfers",
      },
    },
  },
});

export const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screens: {
    Home: HomeTabs,
  },
  groups: {
    Chain: {
      screenLayout: (props) => <ChainScreenLayout {...props} />,
      screens: {
        ChainOne: ChainOneScreen,
        ChainTwo: ChainTwoScreen,
        ChainThree: ChainThreeScreen,
        ChainFour: ChainFourScreen,
      },
    },
  },
});
