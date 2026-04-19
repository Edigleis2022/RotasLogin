import { View, Text, TextInput, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Text>Login</Text>

      {/* Campo de usuário */}
      <TextInput placeholder="Usuário" />

      {/* Campo de senha */}
      <TextInput placeholder="Senha" secureTextEntry />

      {/* Botão de entrar */}
      <Button
        title="Entrar"
        onPress={() => {

          // Navega para a tela de lista
          // "as any" evita erro de tipagem do Expo Router
          router.push('/lista' as any);

        }}
      />

    </View>
  );
}