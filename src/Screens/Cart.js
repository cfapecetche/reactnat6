import { StyleSheet, Text, View,FlatList, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import CartItem from '../Components/CartItem'
import { removeAllItem } from '../features/cart/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { usePostOrdersMutation } from '../app/services/shopServices'
import Container, { Toast } from 'toastify-react-native'

const Cart = ({navigation,route}) => {
    
  const dispatch = useDispatch()
  const localId = useSelector(state => state.auth.value.localId)
  const cart = useSelector(state => state.cart.value)
  
  useEffect(()=>{
    if (!cart.totalItems) {navigation.navigate("Home")}
    },[cart.totalItems])
        
  const [triggerPostOrder,{data,isSuccess,isError,error}] = usePostOrdersMutation()
  
  const postOrder = () =>{
   triggerPostOrder({localId, order:cart})
   dispatch(removeAllItem())
   navigation.goBack()
   
}
  
  return (
    <View style={styles.container}>
        <Container animationStyle="rightInOut" position="top" />
        <FlatList
        
            data={cart.items}
            keyExtractor={item => item.id}
            renderItem={({item})=> <CartItem item={item}/>}
        />
        
        <View style={styles.confirmContainer}>
        
           <TouchableOpacity onPress={postOrder}> 
              <Text style={styles.text}>Confirmar</Text>
            </TouchableOpacity>
               <Text style={styles.text}>Total: $ {cart.total} </Text>

               
        </View>
    </View>
   
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:110
    },
    confirmContainer:{
        backgroundColor:"grey",
        padding:15,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    text:{
        color:"blue",
        fontSize:20,
        fontFamily:"Font1"
    }
})