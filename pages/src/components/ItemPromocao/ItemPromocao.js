import { StyleSheet, Text, View, Image } from "react-native";

export function ItemPromocao(props) {
  return (
    <View style={styles.estiloPromocao}>
      <Text style={styles.textoPromo}>{props.textoPromo}</Text>
      <Image source={props.imagem} style={styles.imagemPromo} />
      <Text style={styles.precoAntigo}>{props.precoAntigo}</Text>
      <Text style={styles.precoNovo}>{props.precoNovo}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  imagemPromo: {
    width: 150,
    height: 150,
    resizeMode: "center",
    marginLeft: 115,
  },
  estiloPromocao: {
    backgroundColor: "#FFD700",
    margin: 5,
    padding: 7,
    width: 400,
    height: 274,
    borderRadius: 7,
    borderColor: "red",
    borderWidth: 4,
  },
  precoAntigo: {
    fontSize: 19,
    textDecorationLine: "line-through",
    textAlign: "center",
  },
  precoNovo: { fontSize: 19, textAlign: "center" },
  textoPromo: { fontSize: 25, textAlign: "center" },
});
