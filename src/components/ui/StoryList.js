import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Story from './Story';
import Avtar from '../../assets/images/avtar.jpg'
import AntIcon from 'react-native-vector-icons/AntDesign';

const StoryList = () => {

    const data = [
  { id: '1', title: 'Item 1', image: require('../../assets/images/avtar.jpg') },
  { id: '2', title: 'Item 2', image: require('../../assets/images/avtar.jpg') },
  { id: '3', title: 'Item 1', image: require('../../assets/images/avtar.jpg') },
  { id: '4', title: 'Item 2', image: require('../../assets/images/avtar.jpg') },
  { id: '5', title: 'Item 1', image: require('../../assets/images/avtar.jpg') },
  { id: '6', title: 'Item 2', image: require('../../assets/images/avtar.jpg') },
  // add more items
];

    const YourStory = () =>{
       return(
        <View>
            <TouchableOpacity className='h-24 w-20 rounded-xl overflow-hidden bg-white flex justify-center items-center gap-3'>
                            <View className=' h-14 w-14 rounded-full  relative flex flex-row justify-center'>
                            <Image source={Avtar} className='h-full w-full border border-white rounded-full'/>
                            <View className='bg-mint p-1 rounded-full absolute -bottom-2 border border-white'>
                            <AntIcon name="plus" size={12} color="black"/>
                            </View>
                            </View>
                            
                            <Text className='text-xs font-medium'>Your Story</Text>
                           
                </TouchableOpacity>
        </View>
       )
    }

  return (
    <View>
        <View className='flex p-2 gap-2'>
            <Text className='font-bold'>Stories</Text>
            <View className='flex flex-row'>
                
                <FlatList
                    data={data}
                    className=''
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    ListHeaderComponent={<YourStory/>}
                    contentContainerStyle={{gap:6}}
                    renderItem={({ item }) => (
                    <Story/>
                    )}/>
            </View>
        </View>
    </View>
  )
}

export default StoryList