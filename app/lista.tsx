import { useRouter } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import dados from "../data/dados.json";

// Tipo do curso
type Curso = {
  id: string;
  nome: string;
  idInstrutor: string;
};

export default function Lista() {

  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Título */}
      <Text style={styles.title}>📚 Cursos Disponíveis</Text>

      {/* Lista os cursos */}
      {dados.cursos.map((curso: Curso) => (

        <TouchableOpacity
          key={curso.id}
          style={styles.card}
          onPress={() => {
            router.push(`/cursos/${curso.id}`);
          }}
        >
          <Text style={styles.cardText}>{curso.nome}</Text>
        </TouchableOpacity>

      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  // Container principal
  container: {
    padding: 16,
    backgroundColor: "#F4F6F8",
    flexGrow: 1,
  },

  // Título
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: "#1E88E5",
  },

  // Card de cada curso
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,

    // Sombra
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },

  // Texto do card
  cardText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "600",
  },

});