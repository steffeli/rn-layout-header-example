import { View, Text } from "react-native";

export function BankIntroScreen() {
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'lightblue',
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>BANK INTRO</Text>
      <View style={{ flex: 1, justifyContent: 'center' }}>
      </View>
    </View>
  );
}
