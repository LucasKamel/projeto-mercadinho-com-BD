import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TelaLogin } from "../pages/screens/TelaLogin";
import { TelaProdutos } from "../pages/screens/TelaProdutos";
import { TelaProduto } from "../pages/screens/TelaProduto";
import { TelaCarrinho } from "../pages/screens/TelaCarrinho";
import { TelaPromocao } from "../pages/screens/TelaPromocao";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="TelaProdutos" component={TelaProdutos} />
        <Stack.Screen name="TelaProduto" component={TelaProduto} />
        <Stack.Screen name="TelaPromocao" component={TelaPromocao} />
        <Stack.Screen name="TelaCarrinho" component={TelaCarrinho} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
