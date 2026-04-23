import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
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
    <View>

      <Text>Lista de Cursos</Text>

      {/* Lista os cursos */}
      {dados.cursos.map((curso: Curso) => (

        <Button
          key={curso.id}
          title={curso.nome}

          onPress={() => {

            // Vai para tela do curso
            router.push(`/cursos/${curso.id}` as any);

          }}
        />

      ))}

    </View>
  );
}