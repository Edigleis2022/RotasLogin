import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import dados from "../../data/dados.json";

export default function Curso() {

  // Pega o ID da rota
  const { id } = useLocalSearchParams();

  const router = useRouter();

  // Garante que o ID é string
  const idString = Array.isArray(id) ? id[0] : id;

  // Busca o curso pelo ID
  const curso = dados.cursos.find((c) => c.id === idString);

  // Busca o instrutor relacionado
  const instrutor = dados.instrutores.find(
    (i) => i.id === curso?.idInstrutor
  );

  return (
    <View>

      <Text>Curso: {curso?.nome}</Text>

      <Text>Instrutor:</Text>

      <Button
        title={instrutor?.nome ?? "Instrutor"}

        onPress={() => {

          if (instrutor) {

            // Vai para tela do instrutor
            router.push(`/instrutores/${instrutor.id}` as any);

          }

        }}
      />

    </View>
  );
}