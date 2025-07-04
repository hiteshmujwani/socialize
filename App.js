import {  useColorScheme } from 'react-native';
import './global.css'
import AppNavigation from './src/navigation/AppNavigation';
import { useState } from 'react';
import AuthNavigation from './src/navigation/AuthNavigation';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [user,setUser] = useState(true)

  return (
    <NavigationContainer>
          {
        user ? <AppNavigation/> : <AuthNavigation/> 
          }
        </NavigationContainer>
  );
}



export default App;
