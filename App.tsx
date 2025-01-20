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
import { HeaderBackground } from 'react-navigation-stack';
import { SafeAreaView, StyleSheet } from 'react-native';
import Colors from './src/Theme/Colors';


function App(): React.JSX.Element {

  return (

    <NavigationContainer >
      <Navigation />
    </NavigationContainer>
  );
}



export default App;

const styles = StyleSheet.create({
  screenColor:{
    backgroundColor:Colors.primery,

  }
})