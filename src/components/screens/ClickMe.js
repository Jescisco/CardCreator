import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
} from "react-native";

const AutoCards = () => {
  const [inputTexto, setInputTexto] = useState("");
  const [tarjetas, setTarjetas] = useState([]);

  const newCard = () => {
    if (inputTexto.trim() !== "") {
      setTarjetas([...tarjetas, inputTexto]);
      setInputTexto("");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <SafeAreaView style={styles.cardContainer}>
          {tarjetas.map((card, index) => (
            <View key={index} style={styles.card}>
              <Text>{card}</Text>
            </View>
          ))}
        </SafeAreaView>
      </ScrollView>
      <View style={styles.position}>
        <TextInput
          style={styles.input}
          placeholder="Enter card text"
          onChangeText={(texto) => setInputTexto(texto)}
          value={inputTexto}
        />
        <Button title="Create" onPress={newCard} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {},
  input: {
    height: 40,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: "80%", 
  },
  cardContainer: {
    marginTop: 20,
  },
  card: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 5,
    borderRadius: 10,
  },
  position: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "white",
  },
});

export default AutoCards;
