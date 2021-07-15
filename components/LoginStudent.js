import { NavigationContainer } from '@react-navigation/native'
import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Button, TouchableOpacity, TextEvent, } from 'react-native'
// import { Button } from 'react-native-paper'

export default class LoginStudent extends Component {
    



LoginGo = ()=>{
    this.props.navigation.navigate('acountsigUp')
}


GoForgetPass = ()=>{
    this.props.navigation.navigate('forgetpassword')
}

    render() {
        return (
            <View style={styles.container}>

        

<Text style={{fontSize:20, fontWeight:'bold' , color:'#1A1461'}}>LAUTECT CBT EXAM PRACTISE</Text>

        <Text style={styles.head}>Sign In</Text>
                <View style={styles.con}>      
                  <TextInput style={styles.input}
                    placeholder='Username'

                />
                    <TextInput
                        style={styles.input}
                        placeholder='Password'

                    />
                </View>
             
             
             <View style={styles.but}>  
             <TouchableOpacity style={styles.button}   >
                    <Text style={styles.log} >Login</Text>
                </TouchableOpacity>
                </View>
                <View>
             <TouchableOpacity onPress={this.GoForgetPass}>  
                  <Text>Forget password? ClickMe</Text>
                  </TouchableOpacity>

                </View>
<View style={styles.accounthead}>
 <Text style={{color:'#1A1461', fontSize:15}}> Don't have acccount yet?</Text> 
 <TouchableOpacity style={{backgroundColor:'#1A1461', width:80, borderRadius:4, justifyContent:'center' ,alignContent:'center', marginTop:5}} onPress={this.LoginGo}>
 <Text style={{color:'white', fontSize:20}} >Sign Up</Text>
 </TouchableOpacity>
</View>

            </View >
    
    

        )}}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    },
    con: {
        width: 280
    },
    but: {
        width: 250
    },

    input: {
        borderColor: "#00aeff",
        borderWidth: 1,
        borderRadius: 30,
        height: 50,
        paddingHorizontal: 20,
        marginVertical: 15,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#1A1461",
        padding: 13,
        borderRadius: 30,
        marginVertical: 15,
    },
    log: {
        fontSize: 18,
        color: '#fff'
    },
    or: {
        textAlign: "center"
    },
  
    head: {
        fontSize: 25,
        fontWeight: '700',
        color: "#1A1461",
        paddingVertical: 20
    },
    accounthead:{
        flexDirection:'row',
        marginTop:10

    }
});


