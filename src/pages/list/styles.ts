import { Dimensions, StyleSheet } from "react-native";


export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red'
  },
  header: {
    width: '100%',
    height: Dimensions.get('window').height / 6,
    backgroundColor: 'blue',
    justifyContent: 'center'
  }
})