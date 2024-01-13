import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTab from "./src/components/navigation/NavigationTab";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <NavigationTab/>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
