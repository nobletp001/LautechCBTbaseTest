import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import  MyStack from './components/StackHome'
export default function App() {
  return (

<NavigationContainer>
      <MyStack/>
  </NavigationContainer>
  );
} 

const styles = StyleSheet.create({
  container: {
   textAlign:'center'
  }


  })