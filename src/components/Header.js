import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Avtar from '../assets/images/avtar.jpg'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';





const Header = () => {
  return (
    <View className=''>
      <View className='flex flex-row justify-between items-center header p-3 bg-white'>
        <View className='header-left flex flex-row items-center gap-1'>
          <Text className='text-3xl font-medium'>Socialize</Text>
          {/* this is the first layout of header  */}
          {/* <TouchableOpacity className='flex flex-row bg-white px-2 py-1 rounded-full gap-1 items-center'>
            <Icon name="notifications" size={18}/>
            <Text className='font-bold text-base'>3</Text>
          </TouchableOpacity>
          <TouchableOpacity className='flex flex-row justify-center items-center bg-white rounded-full py-1 px-2'>
           <Ionicons name="chatbubble-ellipses" size={18} className=""/>
          </TouchableOpacity> */}
          {/* this is the first layout of header  */}
        </View>
        <View className='header-right'>
          <View className='relative'>
             <Ionicons name="chatbubble-ellipses" size={32} className=""/>
             <Text className='absolute z-10 text-white bg-red-500 rounded-full flex justify-center items-center p-1 text-xs font-bold -top-2 -right-1'>10</Text>
          </View>
          {/* this is the first layout of header  */}
          {/* <TouchableOpacity className='h-9 w-9 rounded-full overflow-hidden bg-white'>
          <Image source={Avtar} className='h-full w-full object-contain rounded-full border border-white'/>
          </TouchableOpacity> */}
          {/* this is the first layout of header  */}
        </View>
      </View>
    </View>
  )
}

export default Header