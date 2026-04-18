import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import dados from "../data/dados.json";

export default function Lista() {
  const router = useRouter();

  return (
    <View>
      <Text>Lista de Cursos</Text>

      {/* Percorre os cursos do JSON */}
      {dados.cursos.map((curso) => (
        <Button
          key={curso.id}
          // Nome do curso
          title={curso.nome}
          // Navegação para rota dinâmica
          onPress={() => {
            // "as any" evita erro de tipagem do Expo Router
            router.push(`/cursos/${curso.id}` as any);
          }}
        />
      ))}
    </View>
  );
}
