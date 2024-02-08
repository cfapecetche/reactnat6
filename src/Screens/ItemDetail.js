import { StyleSheet, Text, View , Image, Pressable, Alert, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../Global/colors'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'
import Container, { Toast } from 'toastify-react-native'


const ItemDetail = ({navigation,route}) => {

  const dispatch = useDispatch()
  const product = useSelector((state)=> state.shop.value.productSelected)
  const images = product.images ? product.images : []
  
  
  const addCartProduct = () =>{
        dispatch(addItem(product))
        Toast.success ('Se agrego correctamente')
        
        
   }

   const backProduct = () =>{
    navigation.goBack()
}
 

 
 
  return (
    <View style={styles.container}>
       <Container animationStyle="rightInOut" position="top" />
      <View style={styles.content} >
          
     
          
          <Image
            style={styles.image}
            source={{uri:images[2]}}
            resizeMode='cover'
          />
          <View style={styles.containerText}>
            <Text style={styles.title}>{product.title}</Text>
            <Text>{product.description}</Text>
          </View>
          <View style={styles.containerPrice}>
            <Text style={styles.price}>$ {product.price}</Text>
            <Pressable style={styles.buyNow} onPress={addCartProduct}>
              <Text style={styles.buyNowText}>Agregar al carrito</Text>
            </Pressable>
            <Pressable style={styles.buyNow} onPress={backProduct}>
              <Text style={styles.buyNowText}>Volver</Text>
            </Pressable>
          </View>
        </View>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flex:1,
        justifyContent:"start",
        alignItems:"center",
    },
    content:{
      width:"100%"
    },

    image:{
      width:"100%",
      height:300
    },
    goBack:{
      width:"100%",
      backgroundColor:colors.color1,
      padding:10,
      paddingStart:40
     },
     containerText:{
      gap:25,
      paddingHorizontal:5,
      paddingVertical:25
     },
     containerPrice:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginVertical:10
     },
     title:{
      fontSize:20,
      fontWeight:"bold"
     },
     price:{
      fontSize:30
     },
     buyNow:{
      backgroundColor:colors.color1,
      paddingVertical:5,
      paddingHorizontal:10,
      borderRadius:5
     },
     buyNowText:{
      color:"white"
     }
})