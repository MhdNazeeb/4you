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


function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}



export default App;
