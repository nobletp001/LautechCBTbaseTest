import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyDrawerStack from './DrawerStack'

import AccountSignUp from './RegisterStudent';
import LoginStudent from './LoginStudent';
const Tab = createBottomTabNavigator();

function MyTabs( {navigation}) {

  const GoToHomeScreen=()=>{
  navigation.navigate('Home')
  }
  return (


    
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MyDrawerStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <TouchableOpacity onPress={GoToHomeScreen}>
            <MaterialCommunityIcons name="home" color={color} size={size}  />
            </TouchableOpacity>

          ),
        }}
      />
      
     
       <Tab.Screen name="loginstudent" component={LoginStudent}
        options={{
          tabBarLabel: 'REGISTER',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size}  />

          ),
        
        }}
      /> 

    

      
      
   

    </Tab.Navigator>
  );
}

export default MyTabs;