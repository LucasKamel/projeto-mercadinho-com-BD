import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";

export function TelaLogin({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{ uri: "https://i.postimg.cc/RVDNZ6Fx/mercado.png" }}
      />
      <View style={styles.email}>
        <MaterialCommunityIcons name="email-outline" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder=" Enter your email"
          keyboardType="email-address"
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.senha}>
        <MaterialCommunityIcons name="key-outline" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder=" Enter your password"
          keyboardType="visible-password"
          onChangeText={setSenha}
        />
      </View>
      <View style={styles.dica}>
        {senha != "" ? <Text>Dica: Senha de 8 digitos</Text> : <Text></Text>}
      </View>

      <View style={styles.botao}>
        <Button
          color={"black"}
          title="LOGIN"
          onPress={() => {
            navigation.navigate("TelaProdutos", { email, senha });
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFD700",
  },
  email: {
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    margin: 10,
    width: 350,
    borderRadius: 7,
    flexDirection: "row",
  },
  senha: {
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    width: 350,
    borderRadius: 7,
    flexDirection: "row",
  },

  botao: { width: 230, margin: 10, marginBottom: 50 },

  logo: {
    height: 150,
    width: 150,
    resizeMode: "center",
  },
  dica: { width: 200 },
});
