import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getWidth } from '../../Theme/constens';
import Colors from '../../Theme/Colors';

interface CategoryItemProps {
  item: string; // Adjust the type based on the actual data structure of `item`
}

const CategoryItem: React.FC<CategoryItemProps> = ({ item }) => {
  return (
    <View
      style={{
        backgroundColor: Colors.secondery,
        marginRight: getWidth(40),
        paddingHorizontal: getWidth(37),
        borderRadius: 10,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
        }}
      >
        <Text>{item}</Text>
        <Text>100</Text>
      </View>
    </View>
  );
};

export default CategoryItem;
