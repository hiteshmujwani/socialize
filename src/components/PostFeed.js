import { View, Text, Image } from 'react-native'
import React from 'react'
import Avtar from '../assets/images/avtar.jpg'
import PostCard from './ui/PostCard'

const PostFeed = () => {
  return (
    <View className="p-2 mt-3">
      {/* Header */}
      <View>
        <Text className="font-medium text-2xl">Recently Post</Text>
      </View>
    <View>
        <PostCard/>
        <PostCard/>
        <PostCard/>
    </View>
     
    </View>
  )
}

export default PostFeed
