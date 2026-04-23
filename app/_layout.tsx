import { Stack } from "expo-router";

//Organiza as telas e define opções comuns de header
export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1E88E5",
        },
        headerTintColor: "#FFF", // cor do texto e botão voltar
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    >
      {/* Tela inicial (login) */}
      <Stack.Screen
        name="index"
        options={{
          title: "Curso Online",
          headerTitleAlign: "center",
        }}
      />

      {/* Lista de cursos */}
      <Stack.Screen
        name="lista"
        options={{
          title: "Cursos",
          headerTitleAlign: "center",
        }}
      />

      {/* Tela de curso */}
      <Stack.Screen
        name="cursos/[id]"
        options={{
          title: "Detalhes do Curso",
          headerTitleAlign: "center",
        }}
      />

      {/* Tela de instrutor */}
      <Stack.Screen
        name="instrutores/[id]"
        options={{
          title: "Instrutores",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
