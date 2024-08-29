import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChainHeader } from "layouts/headers/ChainHeader";
import { ChainScreenLayout } from "layouts/screens/ChainScreenLayout";
import { SpecialScreenLayout } from "layouts/screens/SpecialScreenLayout";
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
      layout: (props) => <SpecialScreenLayout {...props} />,
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
    // Example of chaining screens in a group on the stack using popToTop
    Chain: {
      screenLayout: (props) => <ChainScreenLayout {...props} />,
      screenOptions: {
        title: "Special Chains",
        header: (props) => <ChainHeader {...props} />,
      },
      screens: {
        ChainOne: ChainOneScreen,
        ChainTwo: ChainTwoScreen,
        ChainThree: ChainThreeScreen,
        ChainFour: ChainFourScreen,
      },
    },
  },
});
