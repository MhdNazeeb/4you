import { View, Text, StyleSheet, Touchable, TouchableOpacity, FlatList, ScrollView, Image } from 'react-native'
import React from 'react'
import { getWidth } from '../../Theme/constens'
import CommonStyles from '../../Theme/commonStyles'
import Colors from '../../Theme/Colors'
import category from '../../constance/categoryNames'
import CategoryItem from './CategoryItem'
import RoundItem from './RoundItem'
import indianStates from '../../constance/stateName'


const Category = () => {

  return (
    <View >
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.childContainer}>
          <Text style={[CommonStyles.subTitle, { color: Colors.textPrimery }]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.childContainer}>
          <Text style={[CommonStyles.subTitle, { color: Colors.textPrimery }]}>All</Text>
        </TouchableOpacity>
        <FlatList
          data={Object.values(category[0])}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }: string | any) => <CategoryItem item={item} />}
        />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        <View style={{ flex: 1, marginTop: getWidth(60), alignItems: 'center', flexDirection: 'row', gap: 10 }}>
          {indianStates.map((val) => (
            <View style={{ borderRadius: 25 }}>
              <Image width={100} height={100} source={{ uri: "https://previews.123rf.com/images/arcady31/arcady311606/arcady31160600002/59113161-special-offer-red-star-icon.jpg" }} resizeMode="cover" />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
  mainContainer: {
    maxWidth: getWidth(1),
    marginTop: getWidth(60),
    display: 'flex',
    flexDirection: 'row',
    gap: 5
  },
  childContainer: {
    backgroundColor: Colors.secondery,
    width: getWidth(10),
    height: getWidth(12),
    display: 'flex',
    ...CommonStyles.contentCenter,
    borderRadius: 8

  }
}

)