import { createStackNavigator } from "react-navigation-stack";
import { createAppContianer } from "react-navigation"


const screens = {
    Login:{
        screen: Login
    }, 
    Register:{
        screen: Register
    }
}

const LoginStack = createStackNavigator(screens)

export default createAppContianer(LoginStack)