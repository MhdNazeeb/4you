import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../../screens/splash/Splash';
import { routeNames } from '../Screens';
import TabNavigation from '../tab/TabNavigation';

export default function ManiNavigation() {
    const Stack = createStackNavigator();
    const { Spalsh, Home } = routeNames

    return (
        <Stack.Navigator initialRouteName={Spalsh}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={Spalsh} component={Splash
            } />


            {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        </Stack.Navigator>

    )
}