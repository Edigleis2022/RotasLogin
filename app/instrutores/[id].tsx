import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import dados from "../../data/dados.json";

export default function Instrutor() {

  const { id } = useLocalSearchParams();

  // Garante string
  const idString = Array.isArray(id) ? id[0] : id;

  console.log("ID instrutor:", idString);

  // Busca instrutor
  const instrutor = dados.instrutores.find(
    i => i.id === idString
  );

  console.log("Instrutor encontrado:", instrutor);

  // Busca cursos do instrutor
  const cursos = dados.cursos.filter(
    c => c.idInstrutor === idString
  );

  return (
    <View>

      <Text>Instrutor: {instrutor?.nome}</Text>

      <Text>Cursos:</Text>

      {/* Lista cursos */}
      {cursos.map(curso => (
        <Text key={curso.id}>{curso.nome}</Text>
      ))}

    </View>
  );
}