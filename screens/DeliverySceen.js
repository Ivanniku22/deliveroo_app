import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/solid'

const DeliverySceen = () => {

    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)

  return (
    <View className='bg-[#00CCBB] flex-1'>
      <SafeAreaView className='z-50'>
        <View className='flex-row justify-between items-center p-5'>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <XMarkIcon color={"white"} size={30}/>
            </TouchableOpacity>
            <Text className='font-light text-white text-lg'>Order Help</Text>
        </View>

        <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
            <View className='flex-row justify-between'>
                <View>
                    <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
                    <Text className='text-3xl font-bold'>45-55 Minutes</Text>
                </View>
                <Image 
                    source={{
                        uri: 'https://media1.giphy.com/media/gsr9MG7bDvSRWWSD1Y/giphy.gif?cid=6c09b952zuwueh0tm1zhmxcydegrybcvtevdijmoltgv0urk&rid=giphy.gif&ct=s'
                    }}
                    className='h-20 w-20'
                />
            </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default DeliverySceen