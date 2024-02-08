import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'


const CartTotalItems = () => {
  
  const cartItems = useSelector(state => state.cart.value.totalItems)
 
    return (
    <View style={styles.container}>
                  <Text style={{...styles.text,...{}}}>{cartItems}</Text>
           
    </View>
  )
}

export default CartTotalItems

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
    },
    text:{
        fontSize:20,
        fontWeight: 'bold',
        color:"red",
        textAlign:"center"
        
    }
})