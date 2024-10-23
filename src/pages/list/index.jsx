import { Text, View } from "react-native";
import { style } from "./styles";

export default function List() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text>Bom dia D</Text>
      </View>
    </View>
  )
}