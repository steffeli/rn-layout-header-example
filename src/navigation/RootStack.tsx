import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens } from "./Screens";
import { HomeScreen } from "screens/authenticated/Home";
import { SavingsHomeScreen } from "screens/authenticated/SavingsHome";
import { MortgageHomeScreen } from "screens/authenticated/MortgageHome";
import { MyBankHome } from "screens/authenticated/MyBankHome";
import { useIsAuthenticated, useIsUnauthenticated } from "NavigationProvider";
import { BankIntroScreen } from "screens/unauthenticated/BankIntro";
import { LoginScreen } from "screens/unauthenticated/Login";
import { ProfileScreen } from "screens/authenticated/Profile";

export const BottomTabs = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    [Screens.HOME]: HomeScreen,
    [Screens.SAVINGS_HOME]: SavingsHomeScreen,
    [Screens.MORTGAGE_HOME]: MortgageHomeScreen,
    [Screens.MY_BANK_HOME]: MyBankHome
  },
});

export const RootStack = (initialRouteName: string) => createNativeStackNavigator({
  initialRouteName,
  groups: {
    Unauthenticated: {
      if: useIsUnauthenticated,
      screens: {
        [Screens.LOGIN]: LoginScreen,
        [Screens.BANK_INTRO]: BankIntroScreen,
      }
    },
    Authenticated: {
      if: useIsAuthenticated,
      screens: {
        [Screens.BOTTOM_TABS]: BottomTabs,
        [Screens.PROFILE]: ProfileScreen,
      }
    }
  },
});
