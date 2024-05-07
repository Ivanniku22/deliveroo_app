import { View, Text, Image} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    UserIcon,
    ChevronDownIcon,
    SearchIcon,
    AdjustmentsIcon,
} from 'react-native-heroicons/outline'

const HomeScreen = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown:false,
      })
    }, [])


  return (
    <SafeAreaView className='bg-white pt-5'>
      <Text className='text-red-500'>

        {/* Header */}

            <View className='flex-row pb-3 items-center mx-4 space-x-4'>
                <Image 
                    source={{
                        uri:'https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450'
                    }}
                    className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                />

                <View className='flex-initial w-64'>
                    <Text className='font-bold text-gray-400 text-xs'>
                        Deliver Now
                    </Text>
                    <Text className='font-bold text-xl'>
                        Current Location 
                        <ChevronDownIcon size={10} color='#00CCBB'/>
                    </Text>
                </View>
                
                <UserIcon size={30} color='#00CCBB'/>
            </View>
      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen