import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { getWidth, lightenColor } from '../Theme/constens'
import Colors from '../Theme/Colors'
import HomeIcon from '../assetes/svg/HomeIcon'
import SearchIcon from '../assetes/svg/SearchIcon'
import CommonStyles from '../Theme/commonStyles'


interface searchProps {
    width: number,
    height: number
    marginTop: number,
    borderRadius: number

}
const Search: React.FC<searchProps> = ({ width, height, marginTop, borderRadius }) => {
    const [searchText, setSearchText] = useState('');

    return (
        <View style={[styles.searchContainer]}>
            <SearchIcon />
            <View style={CommonStyles.containerFlex1}>

                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    value={searchText}
                    onChangeText={(text) => setSearchText(text)}
                />
            </View>

        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    searchContainer: {
        width: getWidth(1.04),
        backgroundColor: Colors.secondery,
        height: getWidth(8),
        marginTop: getWidth(50),
        borderRadius: getWidth(32),
        paddingLeft: getWidth(30),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        height: getWidth(8),
        width: getWidth(1.04),
        fontSize: getWidth(30),
        color: lightenColor(Colors.textPrimery, 3)
    },
})