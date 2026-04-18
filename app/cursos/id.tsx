import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import dados from "../../data/dados.json";

export default function Curso() {
  // Pega o ID da URL
  const { id } = useLocalSearchParams();

  const router = useRouter();

  // Busca o curso pelo ID
  const curso = dados.cursos.find((c) => c.id === id);

  // Busca o instrutor relacionado
  const instrutor = dados.instrutores.find((i) => i.id === curso?.idInstrutor);

  return (
    <View>
      {/* Nome do curso */}
      <Text>Curso: {curso?.nome}</Text>

      <Text>Instrutor:</Text>

      <Button
        // Evita erro de undefined
        title={instrutor?.nome ?? "Instrutor"}
        onPress={() => {
          if (instrutor) {
            // Navega para tela do instrutor
            router.push(`/instrutores/${instrutor.id}` as any);
          }
        }}
      />
    </View>
  );
}
