import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getHeight, getWidth } from '../../../Theme/constens'
import OfferTags from '../../../components/offerTags/OfferTags'
import LeftArrow from '../../../assetes/svg/LeftArrow'
import Colors from '../../../Theme/Colors'
import { Image } from 'react-native'
import SearchIcon from '../../../assetes/svg/SearchIcon'
import ShieldIcon from '../../../assetes/svg/ShieldIcon'
import ProductIcon from '../../../assetes/svg/productIcon'
import ShareIcon from '../../../assetes/svg/ShareIcon'
import { getStyle } from 'react-native-svg/lib/typescript/xml'
import OfferImage from '../../../components/offerDetails/OfferImage'
import { ScrollView } from 'react-native-gesture-handler'

const OfferDetails = () => {
  const data = ['1', '2', '3', '4', '5', '6', '7', '8']
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primery }}>
      <View style={{ display: "flex", gap: getWidth(60), minHeight: getHeight(10) }}>
        <View style={style.parantHeader}>
          <View style={style.chaildHeader}>
            <LeftArrow />
            <View>
              <Image source={require('../../../assetes/images/logo.png')} style={{ width: getWidth(10), height: getWidth(15), borderRadius: 30 }}
              />
            </View>
            <Text>LULU MALL</Text>
          </View>
          <View style={style.chaildHeader}>
            <TouchableOpacity>
              <SearchIcon />

            </TouchableOpacity>
            <TouchableOpacity>
              <ShieldIcon width={25} height={25} fill="gray" />

            </TouchableOpacity>

          </View>
        </View>
        <View style={style.parantHeader}>
          <View style={[style.chaildHeader, { width: getWidth(4.50), justifyContent: "center" }]}>

            <TouchableOpacity>
              <ProductIcon width={15} height={15} fill="black" />

            </TouchableOpacity>

            <Text>Offers</Text>
          </View>
          <View style={style.chaildHeader}>
            <TouchableOpacity>
              <ProductIcon width={15} height={15} fill="black" />

            </TouchableOpacity>
            <View>
              <Text>View Products</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={style.flatParent}>
          <FlatList
            data={data}
            style={{ backgroundColor: Colors.primery, borderRadius: 5 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => <OfferTags item={item} index={index} selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex} />}
          />
        </View>
        <View style={{ width: getWidth(1), marginTop: getWidth(30), paddingHorizontal: getWidth(70) }}>
          <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
            <View>
              <View>
                <Text style={{ fontSize: getWidth(30), fontWeight: "bold" }}>Special Offer </Text>
              </View>
              <View>
                <Text style={{ fontSize: getWidth(40), fontWeight: "400" }}>Expers on {new Date().toISOString().split('T')[0]}</Text>
              </View>
            </View>
            <View style={{ marginRight: getWidth(60) }}>
              <TouchableOpacity>
                <ShareIcon width={25} height={25} fill="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ minWidth: getWidth(1), marginTop: getWidth(60), paddingHorizontal: getWidth(90), minHeight: getHeight(17) }}>
          <TouchableOpacity style={{ backgroundColor: Colors.Tertiary, borderRadius: 10, paddingVertical: getWidth(60) }}>
            <Text style={{ textAlign: "center", color: Colors.textPrimery, fontWeight: "bold" }}>
              shope here
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            keyExtractor={(item, index) => String(index)}
            data={data}

            numColumns={2}
            renderItem={({ item, index }) => (
              <OfferImage index={index}

              />
            )}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default OfferDetails



const style = StyleSheet.create({
  parantHeader: {
    maxWidth: getWidth(1),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: getWidth(70),
    marginTop: getWidth(30)

  },
  chaildHeader: {
    display: 'flex',
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 10,
    alignItems: 'center'
  },
  flatParent: {
    marginTop: getWidth(40),
  }
})