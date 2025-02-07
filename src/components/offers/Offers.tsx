import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { getHeight, getWidth } from '../../Theme/constens';
import CommonStyles from '../../Theme/commonStyles';
import Colors from '../../Theme/Colors';
import { Image } from 'react-native';

const screenWidth = Dimensions.get('window').width;

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

const Offers = ({ navigation, onPress }: any) => {


    return (
        <View>


            <TouchableOpacity style={styles.card}
                onPress={onPress}
            >
                <Image
                    width={getWidth(2.11)}
                    height={getHeight(3.90)}
                    resizeMode='contain'
                    source={{
                        uri: 'https://qatar.twffer.com/uploads/offers_attachments/1000/b4b5fa47-7bb2-48d0-853b-a398a6798cf9.jpg',
                    }} />
                <View style={{ position: "absolute", top: 0, width: getWidth(7), backgroundColor: "blue", borderBottomEndRadius: 10 }}>
                    <Text style={{ color: "white" }}>New</Text>
                </View>
                <View style={{ position: "absolute", top: 37, width: getWidth(15), backgroundColor: "yellow", right: 0, display: "flex", justifyContent: 'center', alignItems: "center", paddingVertical: 3, borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}>
                    <Text>
                        o{'\n'}n{'\n'}l{'\n'}i{'\n'}n{'\n'}e
                    </Text>
                </View>
                <View style={{ width: 40, height: 40, borderRadius: 10, position: "absolute", bottom: 60, left: 4 }} >
                    <Image
                        width={35}
                        height={35}
                        resizeMode='cover'
                        source={{
                            uri: 'https://cdn.freebiesupply.com/logos/large/2x/bmw-2-logo-png-transparent.png'
                        }} />
                </View>

                <View style={{ width: 90, height: 20, backgroundColor: Colors.Tertiary, position: "absolute", bottom: 65, right: 0, }} >
                    <Text style={{ textAlign: "center" }}>end 6 day</Text>
                </View>
                <View style={{ position: 'absolute', bottom: 7, width: getWidth(2.50) }}>
                    <View style={{ flex: 1, justifyContent: "space-between", flexDirection: 'row', paddingHorizontal: 6 }}>
                        <Text>LULUMAL</Text>
                        <View>
                            <Text>==</Text>

                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: "space-between", flexDirection: 'row', paddingHorizontal: 6 }}>
                        <Text>Specail offer</Text>
                        <View>
                            <Text>@</Text>

                        </View>
                    </View>

                </View>


            </TouchableOpacity>

        </View>

    );
};

export default Offers;

const styles = StyleSheet.create({

    card: {
        backgroundColor: Colors.secondery,
        borderRadius: 10,
        width: getWidth(2.11),
        height: getHeight(2.80),
        marginRight: getWidth(50),
        marginTop: getWidth(50)
    },
    cardText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },


});
