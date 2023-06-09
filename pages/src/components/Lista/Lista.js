import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { ItensLista } from "../ItensLista/ItensLista";

export function Lista({ itens, navigation }) {
  return (
    <FlatList
      numColumns={3}
      keyExtractor={(item) => item.key}
      data={itens}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("TelaProduto", { item,itens });
          }}
        >
          <ItensLista imagem={item.imagem} preco={item.preco} />
        </TouchableOpacity>
      )}
    />
  );
}
