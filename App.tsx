/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';





function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View style={styles.childContainer}>
        <Text style={styles.text1}>snfiajhndis</Text>
      </View>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
   flex:1,
   backgroundColor:"#1C2A27",
   justifyContent:'center',
   alignItems:'center'
  },
  childContainer:{
    width:300,
    height:600,
    backgroundColor:"#5DBB63"
  },
  text1:{
    color:'#FFFFFFf'
  }
});

export default App;
