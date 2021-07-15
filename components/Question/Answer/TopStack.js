import React, { Component } from 'react'
import { View, StyleSheet} from 'react-native'


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PdsHome from '../../pdsHome';

const Tab = createMaterialTopTabNavigator();

 export default function MyTopNavigation() {
  return (

    
    <Tab.Navigator style={styles.container}>
      <Tab.Screen name="pdsHome" component={PdsHome}
      options={{ title: 'PHY', }}
      />
      <Tab.Screen name="MTH" component={PdsHome}
        options={{ title: 'MATH', }}
      />
        <Tab.Screen name="EGN " component={PdsHome} 
          options={{ title: 'ENG', }}
        />
      <Tab.Screen name="BIO" component={PdsHome} 
        options={{ title: 'BIO', }}
      />
        <Tab.Screen name="CHM" component={PdsHome}
          options={{ title: 'CHM', }}
        />
    </Tab.Navigator>
   
  );
}


const styles = StyleSheet.create({
    container: {
marginTop:35
       
    },
  
        
    
})