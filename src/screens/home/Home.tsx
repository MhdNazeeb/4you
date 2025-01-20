import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { BlurView } from "@react-native-community/blur";
import { SafeAreaView } from 'react-native-safe-area-context';
import CommonStyles from '../../Theme/commonStyles';
import { getHeight, getWidth } from '../../Theme/constens';
import Colors from '../../Theme/Colors';
import Search from '../../components/Search';
import filterData from '../../constance/filterNames';

const Home = () => {
  useEffect(() => {
    console.log(Object.keys(filterData[0]), 'this is file object');

  }, [])
  return (
    <SafeAreaView style={[CommonStyles.containerFlex1, {
      backgroundColor: Colors.primery
    }]}>
      <View style={[CommonStyles.mainContainer, { backgroundColor: Colors.primery }]}>
        <View style={[CommonStyles.containerFlex1]}>
          <View style={[CommonStyles.parentContainer, { justifyContent: "space-between", flexDirection: 'row' }]}>
            <Image source={require('../../assetes/images/logo.png')} style={{ width: getWidth(9), height: getWidth(14), borderRadius: 30 }}
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
          <FlatList data={Object.keys(filterData?.[0])}
            horizontal
            renderItem={({ item }: any) => <View style={{ backgroundColor: 'black', width: 30, height: 20 }} >
              <Text style={{ color: "white" }}>
                dflkdfkljrlf
              </Text>
            </View>}
            keyExtractor={(item: any) => item.id} />

        </View>

      </View>
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

  }



});