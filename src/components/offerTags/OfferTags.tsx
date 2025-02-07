import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { getHeight, getWidth } from '../../Theme/constens'
import CommonStyles from '../../Theme/commonStyles'
import Colors from '../../Theme/Colors'

const OfferTags = ({ item, index, selectedIndex, setSelectedIndex }: any) => {
    return (
        <TouchableOpacity
            onPress={() => setSelectedIndex(index)}

        >
            <View style={{ backgroundColor: selectedIndex === index ? Colors.Tertiary : Colors.secondery, width: getWidth(4), minHeight: getHeight(4.70), marginHorizontal: getWidth(70), display: "flex", alignItems: "center" }}>
                <View style={{ width: getWidth(4.4), backgroundColor: "green", minHeight: getHeight(7.8) }}>
                    <Image source={{ uri: "https://cdn.d4donline.com/u/d/25/02/5/ca446142f9f699b5e56b1660c3d7ed80.webp" }} width={getWidth(4.4)} height={getHeight(6)} />

                </View>
                <View style={{ width: getWidth(4.4) }}>
                    <Text style={{ textAlign: "center", fontSize: getWidth(40), fontWeight: "bold" }}>kitchen your day the helthy</Text>

                </View>

            </View>
        </TouchableOpacity>
    )
}

export default OfferTags

const style = StyleSheet.create({
    parentHeader: {
        width: getWidth(1),
        backgroundColor: "blue"
    }
})