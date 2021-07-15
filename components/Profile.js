import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, Button, TouchableOpacity, TextEvent, } from 'react-native'
import { Image, Avatar, Divider, List } from 'react-native-paper'

export default class MyProfile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.head1}>
           <Text  style={{fontSize:20}}> PROFILE</Text>     
           </View>

<View>
<Divider />
           <View style={styles.text1}>
               <Text>First Name</Text>
               <Text  style={{ fontSize:15}}>Ojo</Text>
           </View>
<Divider />
           <View style={styles.text1}>
               <Text>Last Name</Text>
               <Text style={{ fontSize:15}}> Temitope</Text>
           </View>
           </View>

<View>
<View style={styles.head2}>
    <Text style={{fontSize:20}}>PRIVATE DETAILS</Text>
</View>
<Divider />
<View>
<View style={styles.text1}>
    <Text>
        Email Address
    </Text>
    <Text>ojotemitopeidnoble10@gmail.com</Text>
</View>
<Divider />

<View style={styles.text1}>

    <Text>
        Phone Number
    </Text>
    <Text>08132081560</Text>
</View>
<Divider />


<View style={styles.text1}>

    <Text>
        ACCOUNT ID
    </Text>
    <Text>15555</Text>
</View>
<Divider />

</View>

</View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    head1:{
        paddingTop:30,
        paddingLeft:100
    },
    head2:{
        paddingTop:30,
        paddingLeft:10
    },
    text1:{
        flexDirection:"row",
        backgroundColor:'white',
        // height:35,
        // paddingTop:8,
        padding:10,
        justifyContent:'space-between'

        
    }
})