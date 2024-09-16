import { View, Text } from "react-native";

export function SavingsHomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>SAVINGS</Text>
      <View style={{ flex: 1, justifyContent: 'center' }}>
      </View>
    </View>
  );
}
