import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { DadosEntrega } from "../src/components/DadosEntrega/DadosEntrega";
import { FormaPagamento } from "../src/components/FormaPagamento/FormaPagamento";
import { FinalizarCompra } from "../src/components/FinalizarCompra/FinalizarCompra";
import Axios from "axios";
import { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function TelaCarrinho(navigation) {
  const [lista, setLista] = useState();

  useEffect(() => {
    Axios.get("http://192.168.0.38:3001/item").then((response) => {
      setLista(response.data);
    });
  }, [lista]);

  const deletarItem = (key) => {
    Axios.delete(`http://192.168.0.38:3001/item/${key}`);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.lista}>
          {lista &&
            lista.map((item) => (
              <View key={item.id} style={styles.item}>
                <Image style={styles.imagem} source={{ uri: item.imagem }} />
                <View style={styles.informacao}>
                  <Text style={styles.nome}>{item.nome}</Text>
                  <Text style={styles.preco}>{item.preco}</Text>

                  <TouchableOpacity
                    style={styles.carrinho}
                    onPress={() => deletarItem(item.id)}
                  >
                    <MaterialCommunityIcons
                      style={styles.icone}
                      name="delete-off"
                      size={35}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
        </View>

        <DadosEntrega />

        <FormaPagamento />

        <FinalizarCompra />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD700",
  },

  lista: { marginTop: 50 },
  item: {
    marginHorizontal: 20,
    flexDirection: "row",
    borderWidth: 3,
    borderRadius: 7,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  imagem: { marginTop: 10, width: 150, height: 150, resizeMode: "center" },

  informacao: {
    paddingTop: 50,
  },

  nome: {
    fontSize: 14,
    paddingHorizontal: 20,
  },

  preco: {
    fontSize: 20,
    paddingHorizontal: 20,
  },

  icone: {
    paddingTop: 40,
  },
});
