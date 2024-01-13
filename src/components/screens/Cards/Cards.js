import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

export default function Cards(props) {
  const { texto } = props;
  return (
    <View style={styles.card}>
      <Text>{texto}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    borderRadius: "50%",
    width: 150,
    height: 50,
  },
});
