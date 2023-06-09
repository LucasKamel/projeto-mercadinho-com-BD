import { StyleSheet, Text, View, Image } from "react-native";

export function PromocaoDetalhes(props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.precoAntigo}>{props.precoAntigo}</Text>
        <Text style={styles.precoNovo}>{props.precoNovo}</Text>
        <Image style={styles.imagem} source={props.imagem} />
      </View>

      <View style={styles.borda}>
        <Text style={styles.nome}>{props.nome} </Text>
        <Text style={styles.medida}> {props.medida} </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginHorizontal: 70,
  },

  precoAntigo: {
    textDecorationLine: "line-through",
    textAlign: "right",
    fontSize: 25,
  },

  precoNovo: { textAlign: "right", fontSize: 25 },

  imagem: {
    width: 250,
    height: 250,
    alignItems: "center",
    resizeMode: "contain",
  },

  borda: {
    borderWidth: 3,
    borderRadius: 5,
    marginBottom: 50,
  },
  nome: {
    fontSize: 40,
    textAlign: "center",
  },

  medida: {
    fontSize: 30,
    textAlign: "center",
  },
});
