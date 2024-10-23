import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
  button: {
    width: 250,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: themas.colors.primary,
    shadowColor: "#000000",
    shadowOffset: {
        width: 0,
        height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.00,
    elevation: 24
},
textButton: {
    fontSize: 16,
    color: '#FFFF',
    fontWeight: 'bold'
},

})