import { View, Text,Image } from 'react-native'
import React from 'react'
import Avtar from '../../assets/images/avtar.jpg'

const PostCard = () => {
  return (
   
      <View className="mt-3">
        <View className="bg-white p-3 rounded-xl flex flex-col gap-2">
          
          <View className="flex flex-row items-center gap-2">
            <Image source={Avtar} className="h-12 w-12 rounded-full" />
            <View>
              <Text className="text-xl font-semibold text-black leading-5">
                Hitesh Mujwani
              </Text>
              <Text className="text-sm text-black/50">Posted 1h ago</Text>
            </View>
          </View>

          <Text className="text-[15px] text-black/50 font-medium px-1 leading-5">
            Hey guys, my name is Hitesh and this is the view which I captured on the beach during golden hour.
          </Text>

          <View className="max-h-[380px]">
            <Image
              source={Avtar}
              className="w-full h-full rounded-xl"
                resizeMode='cover'
            />
          </View>
        </View>
      </View>
  )
}

export default PostCard