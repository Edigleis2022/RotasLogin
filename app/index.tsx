import { View, Text, TextInput, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {

  // Hook de navegação
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Text>Login</Text>

      {/* Campo usuário */}
      <TextInput placeholder="Usuário" />

      {/* Campo senha */}
      <TextInput placeholder="Senha" secureTextEntry />

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