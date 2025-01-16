import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'

const Splash = () => {
    useEffect(()=>{
        console.log('reach heare');
        
    },[])
  return (
    <View style={{flex:1,backgroundColor:"red"}}>
        
        {/* <Image src='../aasetes/images/logo.png'/> */}
        <Text style={{color:"black"}}>fgafe</Text>
    </View>
  )
}

export default Splash