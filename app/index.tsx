import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {

  // Hook de navegação
  const router = useRouter();

  return (
    <View style={styles.container}>

      <Text>Plataforma de Cursos</Text>

      {/* Campo usuário */}
      <TextInput 
      placeholder="Usuário" 
      style={styles.input}
      />

      {/* Campo senha */}
      <TextInput 
      placeholder="Senha" 
      secureTextEntry 
      style={styles.input}
      />

      {/* Botão entrar */}
      <Button
        title="Entrar"
        onPress={() => {

          // Vai para lista de cursos
          router.push('/lista');

        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8
  },

  button: {
    width: '100%',
    marginTop: 10
  }

});