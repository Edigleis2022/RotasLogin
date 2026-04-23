import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import dados from "../../data/dados.json";

export default function Instrutor() {

  const { id } = useLocalSearchParams();

  // Garante string
  const idString = Array.isArray(id) ? id[0] : id;

  // Busca instrutor
  const instrutor = dados.instrutores.find(
    i => i.id === idString
  );

  // Busca cursos do instrutor
  const cursos = dados.cursos.filter(
    c => c.idInstrutor === idString
  );

  return (
    // ScrollView evita cortar conteúdo em telas menores
    <ScrollView contentContainerStyle={styles.container}>

      {/* Card do instrutor */}
      <View style={styles.card}>
        <Text style={styles.title}>👨‍🏫 Instrutor</Text>
        <Text style={styles.nome}>
          {instrutor?.nome || "Instrutor não encontrado"}
        </Text>
      </View>

      {/* Lista de cursos */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>📚 Cursos</Text>

        {cursos.length === 0 ? (
          <Text style={styles.empty}>Nenhum curso encontrado</Text>
        ) : (
          cursos.map(curso => (
            <View key={curso.id} style={styles.cursoItem}>
              <Text style={styles.cursoNome}>{curso.nome}</Text>
            </View>
          ))
        )}
      </View>

    </ScrollView>
  );
}

// ================= ESTILOS =================
const styles = StyleSheet.create({
  
  // Container principal
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#F4F6F8", // cinza claro (mais moderno)
  },

  // Cards (caixinhas)
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,

    // Sombra (Android + iOS)
    elevation: 3, // Android
    shadowColor: "#000", // iOS
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },

  // Título principal
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },

  // Nome do instrutor
  nome: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1E88E5", // azul destaque
  },

  // Subtítulo (Cursos)
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 10,
  },

  // Item da lista de cursos
  cursoItem: {
    backgroundColor: "#E3F2FD", // azul bem claro
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },

  // Nome do curso
  cursoNome: {
    fontSize: 14,
    color: "#0D47A1",
    fontWeight: "500",
  },

  // Texto quando não há cursos
  empty: {
    fontSize: 14,
    color: "#999",
    fontStyle: "italic",
  },
});