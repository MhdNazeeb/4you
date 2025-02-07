import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { BlurView } from "@react-native-community/blur";
import { routeNames } from '../../../Navigation/Screens';


const Splash = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(routeNames.main);
    }, 2000);

  }, [])
  return (
    <View  >

      <Image
        source={require('../../../assetes/images/logo.png')}
        style={{ width: 100, height: 100 }}
      />

    </View>
  )
}

export default Splash