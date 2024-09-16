import { StatusBar } from "expo-status-bar";
import { createStaticNavigation } from "@react-navigation/native";
import { RootStack } from "./navigation/RootStack";
import { NavigationProvider } from "NavigationProvider";

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <NavigationProvider>
      <Navigation />
      <StatusBar />
    </NavigationProvider>
  );
}
