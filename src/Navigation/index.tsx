import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/splash/Splash';
import TabNavigation from './tab/TabNavigation';

export default function Navigation() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Home" component={TabNavigation
            } />

            {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        </Stack.Navigator>

    )
}