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
            <TouchableOpacity className='h-28 w-24 rounded-xl overflow-hidden bg-white flex justify-center items-center gap-3 mr-[6px] '>
                            <View className=' h-16 w-16 rounded-full  relative flex flex-row justify-center'>
                            <Image source={Avtar} className='h-full w-full border border-white rounded-full'/>
                            <View className='bg-mint p-1 rounded-full absolute -bottom-3 border border-white'>
                            <AntIcon name="plus" size={12} color="black"/>
                            </View>
                            </View>
                            
                            <Text className='text-sm font-medium'>Your Story</Text>
                           
                </TouchableOpacity>
        </View>
       )
    }

  return (
    <View>
        <View className='flex pl-2 pt-2 gap-2'>
            <Text className='font-bold text-xl'>Stories</Text>
            <View className='flex flex-row'>
                
                <FlatList
                    data={data}
                    className=''
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    ListHeaderComponent={<YourStory/>}
                    
                    renderItem={({ item }) => (
                    <Story/>
                    )}/>
            </View>
        </View>
    </View>
  )
}

export default StoryList