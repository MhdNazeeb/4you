import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { getHeight, getWidth } from '../../Theme/constens'
import { Image } from 'react-native'
import Colors from '../../Theme/Colors'

const OfferImage = ({ index, selectedIndex, setSelectedIndex }: any) => {
  return (
    <TouchableOpacity style={{ width: getWidth(2.1), marginHorizontal: "auto", height: getHeight(3.50), marginTop: getWidth(60), position: "relative" ,borderRadius:10}}

    >

      <Image source={{ uri: "https://cdn.d4donline.com/u/d/25/02/6/19d3c1624f04b712290949ab926ca045.jpg" }} width={getWidth(2.1)} height={getHeight(3.50)} style={{borderRadius:10}} />
      <View style={{ width: 20, height: 20, backgroundColor: Colors.Tertiary, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", top: getWidth(80), left: getWidth(80) }} >
        <Text style={{ color: "black", fontWeight: "bold" }}>{index + 1}</Text>

      </View>

    </TouchableOpacity>
  )
}
 
export default OfferImage