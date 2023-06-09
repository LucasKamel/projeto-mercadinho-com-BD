import { FlatList, TouchableOpacity } from "react-native";
import { ItemPromocao } from "../ItemPromocao/ItemPromocao";

export function Promocao({ promocoes, navigation }) {
  return (
    <FlatList
      numColumns={1}
      keyExtractor={(item) => item.key}
      data={promocoes}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("TelaPromocao", { item, promocoes });
          }}
        >
          <ItemPromocao
            textoPromo={item.textoPromo}
            imagem={item.imagem}
            precoAntigo={item.precoAntigo}
            precoNovo={item.precoNovo}
          />
        </TouchableOpacity>
      )}
    />
  );
}
