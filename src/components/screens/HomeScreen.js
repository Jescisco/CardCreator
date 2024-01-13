import { Text, Button, SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import Cards from "./Cards/Cards";

export default function HomeScreen(props) {
  return (
    <SafeAreaView>
      <View style={styles.homeComponent}>
        <Text style={StyleSheet.create({ fontWeight: "bold" })}>
          HomeScreen
        </Text>
      </View>
      <View style={styles.cont}>
        <Cards texto="Card practice 1" />
        <Cards texto="Card practice 2" />
        <Cards texto="Card practice 3" />
        <Cards texto="Card practice 4" />
        <Cards texto="Card practice 5" />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  homeComponent: {
    alignItems: "center",
    marginBottom: 20,
  },
  cont: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: 10,
  },
});
