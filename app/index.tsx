import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {

  // Hook de navegação
  const router = useRouter();

  return (

    // Evita o teclado cobrir os inputs
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>

        {/* Card central */}
        <View style={styles.card}>

          <Text style={styles.title}>🎓 Plataforma de Cursos</Text>

          {/* Campo usuário */}
          <TextInput 
            placeholder="Usuário" 
            style={styles.input}
            placeholderTextColor="#999"
          />

          {/* Campo senha */}
          <TextInput 
            placeholder="Senha" 
            secureTextEntry 
            style={styles.input}
            placeholderTextColor="#999"
          />

          {/* Botão entrar */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // Navega para lista
              router.push('/lista');
            }}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

        </View>

      </View>
    </KeyboardAvoidingView>
  );
}

// ================= ESTILOS =================
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: "#F4F6F8",
  },

  // Card central
  card: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 12,

    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },

  // Título
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: "center",
    color: "#1E88E5",
  },

  // Inputs
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "#FAFAFA",
  },

  // Botão customizado
  button: {
    backgroundColor: "#1E88E5",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  }

});