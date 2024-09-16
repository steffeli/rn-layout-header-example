import { View, Text } from "react-native";

export function MortgageHomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>MORTGAGE</Text>
      <View style={{ flex: 1, justifyContent: 'center' }}>
      </View>
    </View>
  );
}
