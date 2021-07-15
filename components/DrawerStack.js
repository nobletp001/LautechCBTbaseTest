
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyDrawerContent from './DrawerContent'
import Home from './Home'
const Drawer = createDrawerNavigator();

export default class MyDrawerStack extends React.Component {
  render() {
    return (
      

      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: "#eaeaea",
          width: 300,
        }}
        drawerContent={(props) => <MyDrawerContent {...props} />} 

      >

        <Drawer.Screen
          name="Home"
          component={Home}
          options={{ drawerLabel: 'Home' }}
        />
      
         
      
      </Drawer.Navigator>
    );
  }
}
