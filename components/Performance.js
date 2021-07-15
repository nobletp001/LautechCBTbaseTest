import React, { Component } from 'react'
import { Text, TextInput, ScrollView, StyleSheet, Button, TouchableOpacity, TextEvent,View } from 'react-native'
import Constant from 'expo-constants'

export default class Performance extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container} >
                    <View>
<Text style={{fontSize:18}}>Date :25/10/2020</Text>
</View>
<View >
<Text style={{fontSize:18}}>PDS</Text>
</View>
<View style={styles.head1}>
<Text style={{fontSize:18}}>MATH:50</Text>
<Text style={{fontSize:18}}>CHM:70</Text>
<Text style={{fontSize:18}}>BIO:90</Text>
<Text style={{fontSize:18}}>PHY:68</Text>
<Text style={{fontSize:18}}>ENG:78</Text>
</View>

                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        paddingTop: Constant.statusBarHeight,
        paddingLeft:10

    },

head1:{
    flexDirection:'row',
    justifyContent:'space-around'
}})