import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { Title } from 'react-native';
import Constant from 'expo-constants';
import NavigationBar from 'react-native-navbar';
export default class StartHome extends Component {
 
 
GoToPdsH= ()=>{
    this.props.navigation.navigate('MyTop' )
}
    render(){
return (
  <View style={styles.container}>
    <View
      style={{
        alignContent: "center",
        justifyContent: "center",
        paddingTop: 450,
        paddingLeft: 100,
      }}
    >
      <TouchableOpacity
        style={{ width: 150, height: 30 }}
        onPress={this.GoToPdsH}
      >
        <Text
          style={{
            fontSize: 20,
            backgroundColor: "#1A1461",
            color: "white",
            padding: 10,
            textAlign: "center",
          }}
        >
          START{" "}
        </Text>
      </TouchableOpacity>
    </View>
   
 
  </View>
);}}



      

const styles = StyleSheet.create({
    container: {
        paddingTop: Constant.statusBarHeight,

    }})