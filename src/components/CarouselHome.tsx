

import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";
import { getWidth } from "../Theme/constens";

const defaultDataWith6Colors = [
    "#B0604D",
    "#899F9C",
    "#B3C680",
    "#5C6265",
    "#F5D399",
    "#F1F1F1",
];

function ParallaxCarousel() {
    const progress = useSharedValue(0);
    return (
        <Carousel
            data={defaultDataWith6Colors}
            renderItem={({ item }) => (
                <View
                    style={styles.carouselContainer}
                >
                    <View>
                        <Image
                            style={{ flex: 1 }}
                            width={getWidth(1.05)}
                            height={100}
                            resizeMode='contain'
                            source={{
                                uri: 'https://reactnative.dev/img/tiny_logo.png',
                            }} />
                    </View>
                </View>
            )}

            width={getWidth(1)}
            height={70}
            autoPlay={true}
            autoPlayInterval={2000}
            loop={true}
        />
    );
}

export default ParallaxCarousel;


const styles = StyleSheet.create({
    carouselContainer: {
        width: getWidth(1.05),
        borderRadius: 10,
        height:getWidth(7),
        display: "flex",
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: getWidth(80)

    }

})