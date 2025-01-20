import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from '../../screens/splash/Splash';
import ManiNavigation from '../main/mainNavigation';
import { routeNames } from '../Screens';
import CustomBottomBar from '../customtabs/CustomBottomBar';
import { HomeScreen, SplashScreen } from '../../screens';


// Create Tab Navigator
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    const { Main, Home, Spalsh } = routeNames

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <CustomBottomBar {...props} />} >
            <Tab.Screen name={Main} component={HomeScreen} />
            <Tab.Screen name={Spalsh} component={SplashScreen} /> 
        </Tab.Navigator>
    );
}


