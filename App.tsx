/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet } from 'react-native';
import Colors from './src/Theme/Colors';


function App(): React.JSX.Element {

  return (

    <NavigationContainer >
      <GestureHandlerRootView style={{ flex: 1 }}>

        <Navigation />
      </GestureHandlerRootView>

    </NavigationContainer>
  );
}



export default App;

const styles = StyleSheet.create({
  screenColor: {
    backgroundColor: Colors.primery,

  }
})