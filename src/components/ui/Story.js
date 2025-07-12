import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Avtar from '../../assets/images/avtar.jpg'

const Story = () => {
  return (
    <View>
      <View className='mr-[6px]'>
        <TouchableOpacity className='h-28 w-24 rounded-xl overflow-hidden relative'>
            <View className='h-8 w-8 rounded-full overflow-hidden absolute top-1 left-1 z-20'>
            <Image source={Avtar} className='h-full w-full border border-white rounded-full'/>
            </View>
            <View className='h-full w-full'>
            <Image source={Avtar} className='h-full w-full'/>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Story