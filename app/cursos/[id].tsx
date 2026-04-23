import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import dados from "../../data/dados.json";

export default function Curso() {

  // Pega o ID da URL
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // Garante que é string
  const idString = Array.isArray(id) ? id[0] : id;

  // Busca curso
  const curso = dados.cursos.find(c => c.id === idString);

  // Busca instrutor
  const instrutor = dados.instrutores.find(
    i => i.id === curso?.idInstrutor
  );

  return (
    // Scroll para evitar corte em telas pequenas
    <ScrollView contentContainerStyle={styles.container}>

      {/* Card do curso */}
      <View style={styles.card}>
        <Text style={styles.title}>🎓 Curso</Text>
        <Text style={styles.nome}>
          {curso?.nome || "Curso não encontrado"}
        </Text>
      </View>

      {/* Card do instrutor */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>👨‍🏫 Instrutor</Text>

        {instrutor ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // Navega para tela do instrutor
              router.push(`/instrutores/${instrutor.id}`);
            }}
          >
            <Text style={styles.buttonText}>
              {instrutor.nome}
            </Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.empty}>Instrutor não encontrado</Text>
        )}
      </View>

    </ScrollView>
  );
}

// ================= ESTILOS =================
const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#F4F6F8",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,

    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },

  nome: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1E88E5",
  },

  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 10,
  },

  // Botão customizado (melhor que Button padrão)
  button: {
    backgroundColor: "#1E88E5",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },

  empty: {
    fontSize: 14,
    color: "#999",
    fontStyle: "italic",
  },
});