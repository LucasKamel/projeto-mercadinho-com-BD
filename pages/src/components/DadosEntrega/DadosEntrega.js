import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";

export function DadosEntrega() {
  const [CEP, setCEP] = useState("");
  const [Numero, SetNumero] = useState("");
  const [Complemento, setComplemento] = useState("");

  return (
    <View>
      <Text>CEP</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.formulario}
        placeholder='Ex:"00000-000"'
        onChangeText={setCEP}
      />

      <Text>Numero da casa</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.formulario}
        placeholder='Ex: "1234"'
        onChangeText={SetNumero}
      />

      <Text>Complemento</Text>
      <TextInput
        multiline
        style={styles.formulario}
        placeholder='Ex:"Apt 000"'
        onChangeText={setComplemento}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formulario: {
    borderWidth: 1,
    padding: 8,
    margin: 10,
    width: 300,
    borderRadius: 7,
    marginBottom: 20,
  },
});
