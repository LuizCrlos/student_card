import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from "react-native";


const Home = ({ navigation }) => {
  const [documents, setDocuments] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seus Documentos</Text>
      <Image
        source={require('../assets/download.png')} // Certifique-se de que o caminho está correto
        style={styles.image}
      />
      <View style={styles.login}>
        <TextInput
          style={styles.input}
          placeholder="Insira sua matricula" // Adiciona o placeholder aqui
        />
        <TextInput
          style={styles.input}
          placeholder="Insira sua senha" // Adiciona o placeholder aqui
        />
        <TouchableOpacity
          style={styles.addButtonEntrar}  // Adiciona a pagina desejada aqui embaixo
          onPress={() => navigation.navigate("  ")}>  
          <Text style={styles.addButtonEntrarText}>Entrar</Text> 
        </TouchableOpacity>
      </View>
      {documents.length === 0 ? (
        <View style={styles.placeholder}>
          <Text>Você ainda não adicionou nenhum documento.</Text>
        </View>
      ) : (
        <FlatList
          data={documents}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("DocumentDetails", { item })}
            >
              {/* DocumentCard component */}
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("Scan")}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

// Add styles here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#71CE7E",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: 'Courier New',
    paddingTop: 30,
  },
  image: {
    width: 250, // Largura da imagem
    height: 100, // Altura da imagem
    marginBottom: 20, // Margem inferior
    borderRadius: 75, // Cantos arredondados
    resizeMode: 'cover', // Ajuste da imagem
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  login: {
    marginBottom: 40,
    paddingTop: 50,
  },
  placeholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "#007BFF",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 30,
    lineHeight: 30,
  },
  addButtonEntrar: {
    backgroundColor: "#DB8206",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
  },
  addButtonEntrarText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Home;