import { StyleSheet, Text, View } from 'react-native'
import {Entypo} from "@expo/vector-icons"

const TabIconCart = ({icon,label,focused}) => {
  return (
    <View style={styles.container}>
      <Entypo name={icon} size={25} color={focused ? "grey" : "#EEE"}/>
      <Text style={{...styles.text,...{color:focused ? "white" : "#EEE"}}}>{label}</Text>
    </View>
  )
}

export default TabIconCart

const styles = StyleSheet.create({
    container:{
        alignItems:"center"
    },
    text:{
        color:"white",
        textAlign:"center"
    }
})