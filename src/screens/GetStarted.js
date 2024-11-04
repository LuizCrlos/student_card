// screens/GetStarted.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const GetStarted = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Animated Card */}
      <Text style={styles.title}>Student Card</Text>
      <View style={styles.card}>{
       <Image
       source={require('../assets/download.png')} // Certifique-se de que o caminho está correto
       style={styles.image}
     />/* Implement animation here */}</View>
            <Text style={styles.paragraph}>
        Digitalize seu Documento Nacional do Estudante válido através do QR Code
        e tenha ele sempre disponível no seu dispositivo!
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
};

// Add styles here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#71CE7E",
  },
  card: {
    width: "90%",
    height: 200,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    // Add additional styles for the animated card here
  },
  title: {
    fontSize: 58, // Aumenta o tamanho da fonte
    fontWeight: "bold",
    color: "#d86615",
    marginBottom: 20, // Aumenta a margem inferior
    textAlign: "center",
    fontFamily: 'Irish Grover',
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Adiciona sombra ao texto
    textShadowOffset: { width: -1, height: 1 }, // Define o deslocamento da sombra
    textShadowRadius: 10, // Define o raio da sombra
    paddingTop: 20, // Adiciona preenchimento superior
  },
  paragraph: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  image: {
    width: 300, // Largura da imagem
    height: 130, // Altura da imagem
    marginBottom: 10, // Margem inferior
    sborderRadius: 75, // Cantos arredondados
    resizeMode: 'cover', // Ajuste da imagem
  },
  button: {
    backgroundColor: "#DB8206",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default GetStarted;