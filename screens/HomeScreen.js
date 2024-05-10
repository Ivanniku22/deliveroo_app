import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsHorizontalIcon,
} from 'react-native-heroicons/outline'
import Categories from '../components/categories'
import FeaturedRow from '../components/FeaturedRow'
import sanityClient from '../sanity'



const HomeScreen = () => {

    const navigation = useNavigation()

    const [featuredCategories,setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false,
        })
    },[])

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == 'featured']{
                    ...,
                    restaurants[]->{
                        ...,
                        dishes[]->
                    }
                }`
            ).then((data) => {
                setFeaturedCategories(data)
            })
    }, [])


    

  return (
    <SafeAreaView className='bg-white pt-5'>
            {/* Header */}
            <View className='flex-row pb-3 items-center mx-2 space-x-2'>
                <Image
                    source={{
                        uri:'https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450'
                    }}
                    className='h-7 w-7 bg-gray-300 p-4 rounded-full' 
                />

                <View className='flex-1 px-1'>
                    <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                    <Text className='font-bold text-xl'>
                        Current Location <ChevronDownIcon size={15} color="#00CCBB"/>
                    </Text>
                </View>

                <UserIcon size={30} color="#00CCBB"/>
            </View>

            {/* Search */}
            <View className='flex-row items-center space-x-2 pb-2 px-4'>
                <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3 '>
                  <MagnifyingGlassIcon color="gray" size={25}/>
                  <TextInput 
                    placeholder='Restaurants and cuisines'
                    keyboardType='default'
                  />
                </View>
                <AdjustmentsHorizontalIcon color="#00CCBB"/>
            </View>

            {/* Body */}
            <ScrollView
                className='bg-gray-100'
                contentContainerStyle={{
                    paddingBottom:100,
                }}
            >
                {/* Categories */}
                <Categories />

                {/* Featured Rows */}

                {featuredCategories?.map(category =>(
                    <FeaturedRow
                    key={category._id}
                    id={category._id}
                    title={category.name}
                    description={category.short_description}
                    />
                ))}
            </ScrollView>
    </SafeAreaView>
    
  )
}

export default HomeScreen