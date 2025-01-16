import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from '..';
import Splash from '../../screens/splash/Splash';


// Create Tab Navigator
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Splash" component={Splash} />
            {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        </Tab.Navigator>
    );
}


