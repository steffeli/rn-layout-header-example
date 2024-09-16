import { StatusBar } from "expo-status-bar";
import { NavigationProvider } from "NavigationProvider";
import RootNavigator from "navigation/RootNavigator";


export default function App() {
  return (
    <NavigationProvider>
      <RootNavigator />
      <StatusBar />
    </NavigationProvider>
  );
}
