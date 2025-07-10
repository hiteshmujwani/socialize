import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Avtar from '../assets/images/avtar.jpg'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';





const Header = () => {
  return (
    <View className=''>
      <View className='flex flex-row justify-between items-center header p-2'>
        <View className='header-left flex flex-row items-center gap-1'>
          <TouchableOpacity className='flex flex-row bg-white px-2 py-1 rounded-full gap-1 items-center'>
            <Icon name="notifications" size={18}/>
            <Text className='font-bold text-base'>3</Text>
          </TouchableOpacity>
          <TouchableOpacity className='flex flex-row justify-center items-center bg-white rounded-full py-1 px-2'>
           <Ionicons name="chatbubble-ellipses" size={18} className=""/>
          </TouchableOpacity>
        </View>
        <View className='header-right'>
          <TouchableOpacity className='h-9 w-9 rounded-full overflow-hidden bg-white'>
          <Image source={Avtar} className='h-full w-full object-contain rounded-full border border-white'/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Header