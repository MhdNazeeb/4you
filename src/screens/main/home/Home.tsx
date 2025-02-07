import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BlurView } from "@react-native-community/blur";
import { SafeAreaView } from 'react-native-safe-area-context';
import CommonStyles from '../../../Theme/commonStyles';
import { getHeight, getWidth } from '../../../Theme/constens';
import Colors from '../../../Theme/Colors';
import Search from '../../../components/Search';
import filterData from '../../../constance/filterNames';
import Category from '../../../components/category/Category';
import { ScrollView } from 'react-native-gesture-handler';
import indianStates from '../../../constance/stateName';
import CarouselHome from '../../../components/CarouselHome';
import Offers from '../../../components/offers/Offers';
import { routeNames } from '../../../Navigation/Screens';

const Home = ({ navigation }: any) => {
  //states

  const [styleIndex, setStyleIndex] = useState<number>(0)
  //useEffect


  const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '5', title: 'Item 1' },
    { id: '6', title: 'Item 2' },
    { id: '7', title: 'Item 3' },
    { id: '8', title: 'Item 4' },
  ];


  return (
    <SafeAreaView style={{
      backgroundColor: Colors.primery,
      height: getHeight(1)

    }}>
      <View style={{ padding: getWidth(60) }}>
        <View >
          <View style={[CommonStyles.parentContainer, { justifyContent: "space-between", flexDirection: 'row' }]}>
            <Image source={require('../../../assetes/images/logo.png')} style={{ width: getWidth(9), height: getWidth(14), borderRadius: 30 }}
            />
            <TouchableOpacity style={styles.parentContainer}>
              <Text style={CommonStyles.titleText}>
                Kerala
              </Text>
              <View>
                <Text>^</Text>
              </View>
            </TouchableOpacity>

          </View>
          <Search width={30} height={30} marginTop={30} borderRadius={30} />
        </View>
      </View>

      <View
        style={styles.flatList}
      >
        {Object.keys(filterData?.[0])?.map((item, index) => (
          <TouchableOpacity style={[styles.flatListChild, index === styleIndex
            ? {
              borderBottomWidth: 2,
              borderBottomColor: Colors.textPrimery,
            }
            : {},]}

            key={item}
            onPress={() => setStyleIndex(() => (index))}
          >
            <Text>dfd</Text>
            <Text style={{ color: Colors.textPrimery }}>
              {item}
            </Text>

          </TouchableOpacity>))}
      </View>
      <ScrollView  >
        <Category />
        <CarouselHome />
        <View
          style={[
            Platform.OS === 'android' ? { marginBottom: getWidth(2.8) } : { marginBottom: getWidth(5.50), padding: getWidth(60) }
          ]}
        >
          <FlatList
            data={data}
            numColumns={2}
            renderItem={({ item }) => <Offers onPress={() => {
              navigation.navigate(
                routeNames.offerDetails
              )
            }} />}
            keyExtractor={(item) => item.id.toString()}
          />

        </View>
      </ScrollView>


    </SafeAreaView>
  )
}

export default Home



const styles = StyleSheet.create({
  parentContainer: {
    width: getWidth(3.7),
    height: getWidth(15),
    backgroundColor: Colors.secondery,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 6,
    alignItems: "center"

  },
  flatList: {
    maxWidth: getWidth(1),
    gap: 2,
    flexDirection: "row",
  },
  flatListChild: {
    width: getWidth(4),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    flexDirection: 'row',
    paddingBottom: 10,
  }

});