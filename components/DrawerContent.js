
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  Switch,
  TouchableRipple,
} from "react-native-paper";
export default function MyDrawerContent({navigation}) {

const GotoHomeTo =()=>{
    navigation.navigate('Home')
}


const GoProfileTo =()=>{
    navigation.navigate('myprofile')
}


const GoPerformanceTo =()=>{
    navigation.navigate('performance')
}


const GoFeedBackTo =()=>{
    navigation.navigate('feedback')
}
  return (
    <View style={{ flex: 1 }}>
    
      <Drawer.Section>
        <View style={{ flexDirection: "row", marginTop: 50 }}>
          <Avatar.Image source={require("./MyDrawerAsset/FINE3.jpeg")} size={90} />

          <View style={{ marginLeft: 15 }}>
            <Title style={{ color:'#1A1461', fontWeight:'bold'}}>Bishop Temitope </Title>
       <Text style={{ color:'#1A1461'}}>Account ID: 14444</Text>    
          </View>
        </View>
      </Drawer.Section>

        <DrawerContentScrollView>
        <View>
          <TouchableOpacity onPress={GotoHomeTo}>
            <View style={styles.item}>

              <Ionicons
                name="account"
                style={{ color: "#1A1461", fontSize: 30 }}
              />
              <Text style={styles.text}>Home</Text>
            </View>
          </TouchableOpacity>
              <TouchableOpacity onPress={GoProfileTo}>
            <View style={styles.item}>
              <Ionicons
                name="account-multiple"
                style={{ color: "#1A1461", fontSize: 30 }}
              />

              <Text style={styles.text}>Profile</Text>
            </View>
          </TouchableOpacity>

    <TouchableOpacity onPress={GoPerformanceTo}>
            <View style={styles.item}>
              <Ionicons
                name="account-multiple"
                style={{ color: "#1A1461", fontSize: 30 }}
              />

              <Text style={styles.text}>Performance</Text>
            </View>
          </TouchableOpacity>

    <TouchableOpacity onPress={GoFeedBackTo}>
            <View style={styles.item}>
              <Ionicons
                name="account-multiple"
                style={{ color: "#1A1461", fontSize: 30 }}
              />

              <Text style={styles.text}>Feed back</Text>
            </View>
          </TouchableOpacity>

        </View>
      </DrawerContentScrollView>

      
      <Drawer.Section>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "space-between",
          }}
        >
          <Ionicons
            name="exit-to-app"
            style={{ color: "#1A1461", fontSize: 25 }}
          />
          <Text>Sign Out</Text>
        </View>
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingBottom: 25,
    paddingLeft: 25,
    flexDirection: "row",
  },
  text: {
    marginLeft: 20,
    color:'#1A1461',
    fontWeight:'bold'
  },
});
