import { useState } from "react";
import { StyleSheet, Text, FlatList, View, ScrollView } from "react-native";
import { Lista } from "../src/components/Lista/Lista";
import { Promocao } from "../src/components/Promocao/Promocao";
import { GoCarrinho } from "../src/components/GoCarrinho/GoCarrinho";

export function TelaProdutos({ route, navigation }) {
  const { email, senha } = route.params;

  const [setores, setSetores] = useState([
    { setor: "Comida", key: 0 },
    { setor: "Bebida", key: 1 },
    { setor: "Limpeza", key: 2 },
  ]);

  const [itens, setItens] = useState([
    {
      imagem: { uri: "https://i.postimg.cc/Wp9Vzpcq/picanha-Bovina.png" },
      nome: "Picanha",
      preco: "R$ 79,90",
      medida: "900g",
      key: 0,
      imagemBD: "https://i.postimg.cc/Wp9Vzpcq/picanha-Bovina.png",
    },

    {
      imagem: { uri: "https://i.postimg.cc/hPDZ6VXH/smirnoff-Longneck.png" },
      nome: "Sminorff Long Neck",
      preco: "R$ 8,49",
      medida: "275ml",
      key: 1,
      imagemBD: "https://i.postimg.cc/hPDZ6VXH/smirnoff-Longneck.png",
    },

    {
      imagem: { uri: "https://i.postimg.cc/7hZC4RLY/detergente-Neutro.png" },
      nome: "Ypê Detergente Neutro",
      preco: "R$ 1,99",
      medida: "500ml",
      key: 2,
      imagemBD: "https://i.postimg.cc/7hZC4RLY/detergente-Neutro.png",
    },

    {
      imagem: { uri: "https://i.postimg.cc/RhZmq5fy/linguica-Nordestina.png" },
      nome: "Linguiça Nordestina",
      preco: "R$ 31,99",
      medida: "5Kg",
      key: 3,
      imagemBD: "https://i.postimg.cc/RhZmq5fy/linguica-Nordestina.png",
    },
    {
      imagem: { uri: "https://i.postimg.cc/q7YLF8BF/brahma-Lata.png" },
      nome: "Brahma Chopp Lata",
      preco: "R$ 4,49",
      medida: "269ml",
      key: 4,
      imagemBD: "https://i.postimg.cc/q7YLF8BF/brahma-Lata.png",
    },
    {
      imagem: { uri: "https://i.postimg.cc/RZ5MQ8z6/desifetante-Urca.png" },
      nome: "Desinfetante Lavanda Urca",
      preco: "R$ 5,99",
      medida: "2L",
      key: 5,
      imagemBD: "https://i.postimg.cc/RZ5MQ8z6/desifetante-Urca.png",
    },
    {
      imagem: { uri: "https://i.postimg.cc/k5jGccc0/cuzcuz-Coringa.png" },
      nome: "Cuzcuz Coringa",
      preco: "R$ 2,49",
      medida: "500g",
      key: 6,
      imagemBD: "https://i.postimg.cc/k5jGccc0/cuzcuz-Coringa.png",
    },
    {
      imagem: { uri: "https://i.postimg.cc/W4mcnbwx/coca2l.png" },
      nome: "Coca-Cola",
      preco: "R$ 8,49",
      medida: "2L",
      key: 7,
      imagemBD: "https://i.postimg.cc/W4mcnbwx/coca2l.png",
    },
    {
      imagem: { uri: "https://i.postimg.cc/434byWyq/agua-Sanitaria2l.png" },
      nome: "Água Sanitária",
      preco: "R$ 2,75",
      medida: "2L",
      key: 8,
      imagemBD: "https://i.postimg.cc/434byWyq/agua-Sanitaria2l.png",
    },
  ]);

  const [promocoes, setPromocoes] = useState([
    {
      textoPromo: "PROMOÇÃO",
      imagem: { uri: "https://i.postimg.cc/9Q6JfdZj/jack-Daniels.png" },
      nome: "Whisky Jack Daniel's",
      precoAntigo: "DE R$ 169,99",
      precoNovo: "POR R$ 155,99",
      preco: "R$ 155,99",
      medida: "1L",
      key: 9,
      imagemBD: "https://i.postimg.cc/9Q6JfdZj/jack-Daniels.png",
    },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <GoCarrinho navigation={navigation} />
        <FlatList
          numColumns={3}
          keyExtractor={(item) => item.key}
          data={setores}
          renderItem={({ item }) => (
            <Text style={styles.estiloSetores}>{item.setor}</Text>
          )}
        />

        <Lista itens={itens} navigation={navigation} />

        <Promocao promocoes={promocoes} navigation={navigation} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { backgroundColor: "#FFD700" },
  estiloSetores: {
    fontSize: 24,
    backgroundColor: "#FFD700",
    margin: 8,
    width: 120,
    height: 110,
    textAlignVertical: "center",
    textAlign: "center",
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 1,
  },
});
