import { Pressable,StyleSheet, Text, View} from 'react-native'
import { colors } from '../Global/colors'
import {MaterialIcons} from '@expo/vector-icons'
import { clearUser } from '../features/auth/authSlice'
import { useSelector,useDispatch } from 'react-redux'

const Header = ({title = "Producto"}) => {
  
  const localId = useSelector(state => state.auth.value.localId)
  const dispatch = useDispatch()
  const onLogout = () =>{
        dispatch(clearUser())
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>

      {localId && <Pressable onPress={onLogout} style={styles.logoutIcon}>
                      <MaterialIcons name='logout' size={30} color="black"/>
                  </Pressable>
      }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.color1,
        width:"100%",
        height:80,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:20,
        fontFamily:"Font1"
    },
    logoutIcon:{
      position:"absolute",
      right:10
    }
})
