import { Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.cont}>
      <Text style={StyleSheet.create({ fontWeight: "bold" })}>
        SettingsScreen
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cont: {
    alignItems: "center",
    marginBottom: 20,
  },
});
