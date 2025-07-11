import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import StoryList from '../components/ui/StoryList';
import PostFeed from '../components/PostFeed';

const HomeScreen = () => {
  return (
    <ScrollView className=''>
     <View>
      <Header/>
      <StoryList/>
      <PostFeed/>
     </View>
     </ScrollView>
  )
}

export default HomeScreen; 