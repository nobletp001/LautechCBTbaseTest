 import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View,TextInput, Button } from 'react-native';
import Constant from 'expo-constants';
 
 export default class Forgetpassword extends Component {
     render() {
         return (
             <View style= {styles.container}>
                              
<View>
     <TextInput
             style={styles.input}
         placeholder='enter your Gmail'

             />

             
  <Button
  title="SEND"
  
/>
</View>
                 
             </View>
         )
     }
 }
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        paddingTop: Constant.statusBarHeight,
        

    },

 input: {
        borderColor: "#00aeff",
        borderWidth: 1,
        height: 50,
        width:350,
        padding:10,
        borderRadius:10,
        paddingHorizontal: 20,
        marginVertical: 15,
        marginLeft:3
    },



})