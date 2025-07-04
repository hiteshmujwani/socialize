import { createStackNavigator } from "@react-navigation/stack"
import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/RegisterScreen"


const Stack = createStackNavigator()
const AuthNavigation = () => {
  return (
 <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={{ headerTitle: 'notifications' }}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigation