


import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView, Button, TouchableOpacity, TextEvent, } from 'react-native';
import { RadioButton } from 'react-native-paper';

const AccountSignUp = ({navigation}) => {
    // const [fName, setfName] = useState('');
    // const [lName, setlName] = useState('');
    // const [phone, setPhone] = useState('');
    // const [email, setEmail] = useState('');

    // const submitValue = () => {
    //     const frmdetails = {
    //         'First Name': fName,
    //         'Last Name': lName,
    //         'Phone': phone,
    //         'Email': email
    //     }
    // }
    // const [checked, setChecked] = React.useState('first');

const GoSignUp =()=>{
    navigation.navigate('loginstudent')
}

    return (
        
            <ScrollView>
                <View style={styles.container}>
                <View style = {styles.con}>
                <Text style={styles.head}>Create Student Account</Text>
                <TextInput style={styles.input} type="text" placeholder="First Name" />
                <TextInput style={styles.input} type="text" placeholder="Last Name"  />
                <TextInput style={styles.input} type="text" placeholder="Phone" />
                <TextInput style={styles.input} type="text" placeholder="Email"  />
                <TextInput style={styles.input} type="text" placeholder="Password"  />
                <TextInput style={styles.input} type="text" placeholder="Confirm Password" />

               <Button
  
  title="SUBMIT"
  color="#1A1461"
  accessibilityLabel="Learn more about this purple button"
  onPress={GoSignUp}
/>

               
                   </View>
                   </View>
                 </ScrollView>
      
    )
}

export default AccountSignUp




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
         paddingTop: 20,
         padding:50
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
        backgroundColor: "#00aeff",
        padding: 13,
        borderRadius: 30,
        marginVertical: 15,
        width: 300,
    },
    log: {
        fontSize: 18,
        color: '#fff'
    },
    or: {
        textAlign: "center"
    },
    button1: {
        alignItems: "center",
        backgroundColor: '#007eff',
        padding: 13,
        borderRadius: 30,
        marginVertical: 15,
        width: 300,
    },
    head: {
        fontSize: 23,
        fontWeight: '700',
        color: "#1A1461",
        paddingVertical: 18
    },
    radio: {
        flexDirection: 'row',
        alignItems: "center"
    },
    test1:{
        textAlign:"center"
    }
});
