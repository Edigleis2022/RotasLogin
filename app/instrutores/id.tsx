import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import dados from "../../data/dados.json";

export default function Instrutor() {

  // Pega ID da URL
  const { id } = useLocalSearchParams();

  // Busca instrutor
  const instrutor = dados.instrutores.find(i => i.id === id);

  // Busca cursos dele
  const cursos = dados.cursos.filter(c => c.idInstrutor === id);

  return (
    <View>

      <Text>Instrutor: {instrutor?.nome}</Text>

      <Text>Cursos:</Text>

      {/* Lista cursos do instrutor */}
      {cursos.map(curso => (
        <Text key={curso.id}>{curso.nome}</Text>
      ))}

    </View>
  );
}