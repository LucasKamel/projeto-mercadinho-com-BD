import { StyleSheet, Text, View, Image } from "react-native";

export function ItensLista(props) {
  return (
    <View style={styles.estiloItens}>
      <Image source={props.imagem} style={styles.imagemProduto} />
      <Text>{props.preco}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  imagemProduto: {
    width: 100,
    height: 100,
    resizeMode: "center",
  },
  estiloItens: {
    backgroundColor: "#FFD700",
    margin: 9,
    padding: 8,
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 1,
  },
});
