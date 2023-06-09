import { Button, StyleSheet, Alert, View } from "react-native";

export function FinalizarCompra() {
  return (
    <View style={styles.botao}>
      <Button
        title="Finalizar compra"
        color="black"
        onPress={() => Alert.alert("O seu pedido vai ser enviado!")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  botao: {
    marginTop: 30,
    marginHorizontal: 75,
    marginBottom: 20,
  },
});
