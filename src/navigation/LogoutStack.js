import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { clearUser } from '../features/auth/authSlice'
import { useSelector,useDispatch } from 'react-redux'
import { deleteAllSession } from '../database'

const LogoutStack= () => {
  
   const dispatch = useDispatch() 

  

  const onLogout = () =>{
        deleteAllSession().then(result => console.log(result))
        dispatch(clearUser())
  }
  
  onLogout()
  
}

export default LogoutStack


