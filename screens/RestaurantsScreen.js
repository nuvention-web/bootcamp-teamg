import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './MenuScreen';
import RestaurantsListScreen from './RestaurantsListScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const RestaurantsScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="RestaurantsListScreen"
                component={RestaurantsListScreen}
                options={{
                    title: 'Restaurants List',
                }}
                />
            <Stack.Screen
                name='MenuScreen' 
                component={MenuScreen}
                options={{
                    title: 'Menu'
                }}
            />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RestaurantsScreen;