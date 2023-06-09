import { StyleSheet, View, ScrollView, Button, Image } from "react-native";
import { PromocaoDetalhes } from "../src/components/PromocaoDetalhes/PromocaoDetalhes";
import Axios from "axios";
import { GoCarrinho } from "../src/components/GoCarrinho/GoCarrinho";

export function TelaPromocao({ route, navigation }) {
  const { item, promocoes } = route.params;

  const submeterInformacao = () => {
    Axios.post("http://192.168.0.38:3001/item", {
      nome: item.nome,
      imagemBD: item.imagemBD,
      preco: item.preco,
      medida: item.medida,
      key_item: item.key,
    });
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <GoCarrinho navigation={navigation} />
        <PromocaoDetalhes
          imagem={item.imagem}
          nome={item.nome}
          precoAntigo={item.precoAntigo}
          precoNovo={item.precoNovo}
          medida={item.medida}
        />
        <View style={styles.botao}>
          <Button
            title="Adicionar ao carrinho"
            color={"black"}
            onPress={submeterInformacao}
          />
        </View>

        <Image
          style={styles.imagem}
          source={{
            uri: "https://saldaodovidro.com.br/wp-content/uploads/2015/12/logocompre.png",
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD700",
  },
  botao: { marginHorizontal: 75 },
  imagem: {
    width: 250,
    height: 250,
    alignItems: "center",
    resizeMode: "contain",
    marginLeft: 80,
  },
});
