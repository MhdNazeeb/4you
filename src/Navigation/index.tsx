import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/splash/Splash';
import TabNavigation from './tab/TabNavigation';
import { routeNames } from './Screens';

export default function Navigation() {
    const Stack = createStackNavigator();
    const { Spalsh, Tab, Main,Home } = routeNames


    return (
        <Stack.Navigator initialRouteName={Spalsh}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={Spalsh} component={Splash
            } />
           <Stack.Screen name={Home} component={TabNavigation} />
            

        </Stack.Navigator>

    )
}