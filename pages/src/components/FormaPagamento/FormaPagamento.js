import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export function FormaPagamento() {
  return (
    <View>
      <Text>Opções De Pagamento</Text>
      <TouchableOpacity style={styles.opcaoPagamento}>
        <AntDesign name="creditcard" size={32} color="#000" />
        <Text style={styles.opcaoPagamentoTexto}>Cartão</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.opcaoPagamento}>
        <AntDesign name="wallet" size={32} color="#000" />
        <Text style={styles.opcaoPagamentoTexto}>Dinheiro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.opcaoPagamento}>
        <AntDesign name="qrcode" size={32} color="#000" />
        <Text style={styles.opcaoPagamentoTexto}>PIX</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  opcaoPagamento: {
    flexDirection: "row",
    width: 150,
    height: 40,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#FFD700",
    borderRadius: 7,
    borderWidth: 1,
    margin: 10,
  },
  opcaoPagamentoTexto: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
