import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import dados from "../data/dados.json";

// Tipo do curso (evita erro de 'any')
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

      {/* Percorre os cursos do JSON */}
      {dados.cursos.map((curso: Curso) => (

        <Button
          key={curso.id}

          // Nome do curso
          title={curso.nome}

          onPress={() => {

            // Navega para a tela de curso passando o ID
            router.push(`/cursos/${curso.id}` as any);

          }}
        />

      ))}

    </View>
  );
}