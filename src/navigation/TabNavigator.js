import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopStack from './ShopStack'
import CartStack from "./CartStack"
import { colors } from '../Global/colors'
import OrdersStack from './OrdersStack'
import TabIcon from '../Components/TabIcon'
import TabIconCart from '../Components/TabIconCart'
import CartTotalItems from '../Components/CartTotalItems'
import ProfileStack from './ProfileStack'
import {MaterialIcons} from '@expo/vector-icons'
import LogoutStack from './LogoutStack'


const Tab = createBottomTabNavigator()



const TabNavigator = () => {
  return (
        <Tab.Navigator
          screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle: styles.tabBar

          }}
        >
          <Tab.Screen
             name="ShopStack"
             component={ShopStack}
             options={{
              tabBarIcon:({focused}) => <TabIcon icon="shop" label="Productos" focused={focused}/>
             }}
          />
          <Tab.Screen 
              name="CartStack" 
              component={CartStack}
              options={{
                tabBarIcon:({focused}) =>  <><TabIconCart icon="shopping-cart" label="Carrito" focused={focused}/>
                <CartTotalItems  label={CartTotalItems}/></>  
              }}
             />

             
             <Tab.Screen 
              name="OrdersStack" 
              component={OrdersStack}
              options={{
                tabBarIcon:({focused}) => <TabIcon icon="list" label="Ordenes" focused={focused}/> 
              }}
             />
            <Tab.Screen 
              name="ProfileStack" 
              component={ProfileStack}
              options={{
                tabBarIcon:({focused}) => <TabIcon icon="user" label="Perfil" focused={focused}/> 
              }}
             />

            <Tab.Screen 
              name="LogoutStack" 
              component={LogoutStack}
              options={{
                tabBarIcon:({focused}) => <MaterialIcons name='logout' size={25} color="red" label="Logout" focused={focused}/> 
              }}
             />
      </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar:{
      backgroundColor:colors.color3,
      elevation:4,
      position:"absolute",
      bottom:0,
      left:0,
      right:0,
      borderRadius:3,
      height:90


    }
})