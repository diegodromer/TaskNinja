import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";


export const style = StyleSheet.create({
  boxInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    backgroundColor: themas.colors.lightGray,
    borderColor: themas.colors.lightGray
  },
  titleInput: {
    marginLeft: 5,
    color: themas.colors.gray,
    marginTop: 20
  },
  input: {
    height: '100%',
    width: '90%',
    borderRadius: 40,
    padding: 10
  },
  Icon: {
    width: '100%'
  },
  button: {
    width: '10%',
  },
})