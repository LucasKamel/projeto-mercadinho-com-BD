import { TouchableOpacity, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export function GoCarrinho({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.carrinho}
      onPress={() => {
        navigation.navigate("TelaCarrinho");
      }}
    >
      <View>
        <AntDesign name="shoppingcart" size={50} color="black" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  carrinho: {
    width: 60,
    height: 60,
    flex: 1,
    alignItems: "center",
    borderRadius: 7,
    borderWidth: 1,
    marginLeft: 340,
    marginTop: 43,
  },
});
