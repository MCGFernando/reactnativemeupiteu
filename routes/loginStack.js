import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createAppContianer } from "react-navigation"


const screens = {
    Login:{
        screen: Login
    }, 
    Register:{
        screen: Register
    }
}

const LoginStack = createNativeStackNavigator(screens)

export default LoginStack