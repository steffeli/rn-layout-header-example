import { StatusBar } from "expo-status-bar";
import { createStaticNavigation } from "@react-navigation/native";
import { RootStack } from "./RootStack";
import { NavigationProvider, useInitialRouteName } from "NavigationProvider";


export default function RootNavigator() {
    const initialRouteName = useInitialRouteName();
    const Navigation = createStaticNavigation(RootStack(initialRouteName));
    return (
        <Navigation />
    );
}
