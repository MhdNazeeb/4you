import React, { useRef, useState } from "react";
import { FlatList, View, Text, StyleSheet, Dimensions, NativeScrollEvent, NativeSyntheticEvent } from "react-native";

const data = [
  { id: "1", title: "Special Offer" },
  { id: "2", title: "Healthy Start" },
  { id: "3", title: "Online Exclusive" },
  { id: "4", title: "Beauty Deals" },
  { id: "5", title: "New Arrivals" },
];

const screenWidth = Dimensions.get("window").width;

const AutoScrollFlatList = () => {
  // 👇 Define the ref with FlatList<typeof data[0]>
  const flatListRef = useRef<FlatList<typeof data[0]> | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAutoScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const contentWidth = event.nativeEvent.contentSize.width;
    const viewportWidth = event.nativeEvent.layoutMeasurement.width;

    if (contentOffsetX + viewportWidth >= contentWidth - 50) {
      let newIndex = currentIndex + 1;
      if (newIndex >= data.length) {
        newIndex = 0; // Restart from the first item
      }
      setCurrentIndex(newIndex);

      flatListRef.current?.scrollToIndex({
        index: newIndex,
        animated: true,
        viewPosition: 0.5, // Centers the item
      });
    }
  };

  return (
    <View style={styles.container}>
      {/* Horizontal FlatList with Auto-Scroll */}
      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>{item.title}</Text>
          </View>
        )}
        initialScrollIndex={0}
        getItemLayout={(data, index) => ({
          length: screenWidth * 0.7,
          offset: (screenWidth * 0.7) * index,
          index,
        })}
        onScroll={handleAutoScroll}
         // Detect when user is near the end
        scrollEventThrottle={16} 
        // Optimize performance
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  card: {
    width: screenWidth * 0.7,
    height: 100,
    backgroundColor: "#6200EE",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 10,
  },
  cardText: {
    color: "#FFF",
    fontSize: 16,
  },
});

export default AutoScrollFlatList;
