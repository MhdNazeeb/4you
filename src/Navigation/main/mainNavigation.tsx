import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../../screens/onboarding/splash/Splash';
import { routeNames } from '../Screens';
import TabNavigation from '../tab/TabNavigation';
import { OfferDetails } from '../../screens';
import AutoScrollFlatList from '../../screens/test/test';

export default function ManiNavigation() {
    const Stack = createStackNavigator();
    const { spalsh, home, offerDetails,tab } = routeNames

    return (
        <Stack.Navigator 
            screenOptions={{ headerShown: false }}
        >
             <Stack.Screen name={tab} component={TabNavigation
            } />
            <Stack.Screen name={offerDetails} component={OfferDetails
            } />
             <Stack.Screen name={'test'} component={AutoScrollFlatList
            } />



            {/* <Stack.Screen name="Details" component={DetailsScreen} /> */} 
        </Stack.Navigator>

    )
}