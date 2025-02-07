import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/onboarding/splash/Splash';
import TabNavigation from './tab/TabNavigation';
import { routeNames } from './Screens';
import ManiNavigation from './main/mainNavigation';

export default function Navigation() {
    const Stack = createStackNavigator();
    const { spalsh, tab, main, home, offerDetails } = routeNames


    return (
        <Stack.Navigator initialRouteName={spalsh}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={spalsh} component={Splash
            } />
            <Stack.Screen name={main} component={ManiNavigation
            } />
          



        </Stack.Navigator>

    )
}