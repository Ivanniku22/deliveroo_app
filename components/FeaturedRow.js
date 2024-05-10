import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import sanityClient from '../sanity'

const FeaturedRow = ({id ,title,description}) => {
    const [restaurants,setRestaurants] = useState([])

    useEffect(() => {
      // Fetch data from Sanity.io
        sanityClient.fetch(
        `*[_type == "featured" && _id == $id] {
            ...,
            restaurants[]->{
                ...,
                dishes[]->,
                type-> {
                    name
                }
            },
        }[0]`,
        { id }
        )
        .then(data => {
            // Set fetched data to state
            setRestaurants(data?.restaurants);
        })
        .catch(error => {
            // Handle any errors
            console.error('Error fetching data:', error);
        });
    }, [id]);
    
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

            {restaurants.map((restaurant) => (
                <RestaurantCard
                key={restaurant._id}
                id={restaurant._id}
                imgUrl={restaurant.image}
                title={restaurant.name}
                rating={restaurant.rating}
                genre={restaurant.type?.name}
                address={restaurant.address}
                short_description={restaurant.short_description}
                dishes={restaurant.dishes}
                long={restaurant.long}
                lat={restaurant.lat}
                />
            ))}
            
        </ScrollView>
    </View>
  )
}

export default FeaturedRow