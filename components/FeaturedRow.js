import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({title,description}) => {
  return (
    <View>
        <View className='mt-4 flex-row items-center justify-between px-3'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon  color="#00CCBB"/>
        </View>

        <Text className='text-xs text-gray-500 px-3'>{description}</Text>

        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal:14,
            }}
            showsHorizontalScrollIndicator={false}
            className='pt-4'
        >
            {/* Restaurant Cards */}
            <RestaurantCard 
                id={123}
                imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'
                title='Yo! Sushi'
                rating={4.5}
                genre='Japanese'
                address='123 Main St'
                short_description='Test Description'
                dishes={[]}
                long={20}
                lat={0}
            />
            
            <RestaurantCard 
                id={123}
                imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'
                title='Yo! Sushi'
                rating={4.5}
                genre='Japanese'
                address='123 Main St'
                short_description='Test Description'
                dishes={[]}
                long={20}
                lat={0}
            />
            
            <RestaurantCard 
                id={123}
                imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'
                title='Yo! Sushi'
                rating={4.5}
                genre='Japanese'
                address='123 Main St'
                short_description='Test Description'
                dishes={[]}
                long={20}
                lat={0}
            />
        </ScrollView>
    </View>
  )
}

export default FeaturedRow