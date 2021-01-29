import React from 'react';
import { List } from 'react-native-paper';
import mockRestaurants from '../mockRestaurants';
import Restaurant from '../components/Restaurant';
import RestaurantsScreen from './restaurantsScreen';
import { ScrollView } from 'react-native-gesture-handler';

const RestaurantsListScreen = () => {
    return (
        // <ScrollView>
            mockRestaurants.map((restaurant) => (
                <Restaurant 
                    name={restaurant.name}
                    description={restaurant.description}
                    id={restaurant.restaurantid}
                />
            ))
        // </ScrollView>
    );
   

};

export default RestaurantsListScreen;