import { createStackNavigator } from "@react-navigation/stack"
import AboutScreen from "../screens/AboutScreen"
import TabNavigation from "./TabNavigation"
import NotificationScreen from "../screens/NotificationScreen"


const Stack = createStackNavigator()
const StackNavigation = () => {
  return (
 <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen
        name="Tabs"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="notification"
        component={NotificationScreen}
        options={{ headerTitle: 'notifications' }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigation