import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, Button, TouchableOpacity, TextEvent, Alert } from 'react-native'
import Constant from 'expo-constants'
import Answer from './Question/Answer/answers'

export default class PdsHome extends Component {

GoToPdStart= ()=>{
     Alert.alert(
      "Are you sure you want to quit",
      "you won't able to continue again",
      [
        {
          text: "NO",
          onPress: () => console.log("OK Pressed")
        },
        { text: "YES", onPress: () => this.props.navigation.navigate('Home')
        
         }
      ],
      { cancelable: false }
    );
}

    render() {
        return (
            <View style={styles.container}>
            <Answer propGoBackStart= {this.GoToPdStart}/>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {

       
    },
  
        
    
})