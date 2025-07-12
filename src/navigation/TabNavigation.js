import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import CreateNewPost from '../screens/CreateNewPost';
import Avtar from '../assets/images/avtar.jpg'
import SearchPageScreen from '../screens/SearchPageScreen';
import ShortVideoScreen from '../screens/ShortVideoScreen';
import ProfilePageScreen from '../screens/ProfilePageScreen';

const Tab = createBottomTabNavigator();

const Profile = () =>{
  return (
     <TouchableOpacity className='h-9 w-9 rounded-full overflow-hidden bg-white border border-black'>
          <Image source={Avtar} className='h-full w-full object-cover rounded-full p-1'/>
          </TouchableOpacity>
  )
}

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1E40AF', // Tailwind blue-800
        tabBarInactiveTintColor: '#9CA3AF', // Tailwind gray-400
        tabBarStyle: { paddingBottom: 0, height: 60, },
        tabBarShowLabel:false
        
      }}
    >
      <Tab.Screen name="home" component={HomeScreen} options={{tabBarIcon:()=> (<Ionicons name="home" size={30}/>)}}/>
      <Tab.Screen name="search" component={SearchPageScreen} options={{tabBarIcon:()=> (<Ionicons name="search-outline" size={30}/>)}}/>
      <Tab.Screen name="create-new" component={CreateNewPost} options={{tabBarIcon:()=> (<Ionicons name="add-circle-outline" size={30}/>)}}/>
      <Tab.Screen name="short-videos" component={ShortVideoScreen} options={{tabBarIcon:()=> (<Ionicons name="play-circle-outline" size={30}/>)}}/>
      <Tab.Screen name="profile" component={ProfilePageScreen} options={{tabBarIcon:()=> (<View><Profile/></View>)}}/>
    </Tab.Navigator>
  );
};

export default TabNavigation;
