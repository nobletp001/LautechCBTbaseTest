import React, { Component } from 'react'
import { Text, TextInput, ScrollView, StyleSheet, Button,TouchableOpacity, TextEvent,View } from 'react-native'
import Constant from 'expo-constants';
import Textarea from 'react-native-textarea';

export default class FeedBack extends Component {
    render() {
        return (
            <View style={styles.container}>

<View>
     <TextInput
                        style={styles.input}
                        placeholder='enter your Gmail'

                    />
</View>
                <View>
               <Textarea
    containerStyle={styles.textareaContainer}
    style={styles.textarea}

    // onChangeText={this.onChange}
    // defaultValue={this.state.text}

    maxLength={120}
    placeholder={'enter your feedback'}
    placeholderTextColor={'#c7c7c7'}
    underlineColorAndroid={'transparent'}
  />
  </View>

  <Button
  title="SENDFEEDBACK"
  loading
/>
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
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#F5FCFF',
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
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