import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { Title } from 'react-native';
// import { SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';

import NavigationBar from 'react-native-navbar';
import Constant from 'expo-constants'
import { color } from 'react-native-reanimated';



export default class Home extends Component {


 rightButtonConfig = {
  title: 'OPEN',
  tintColor:'white',
  handler: () =>{ this.props.navigation.openDrawer()},
};
 
 titleConfig = {
  title: 'LAUTECH CBT',
  tintColor:'white'
};

GoToPdsHome= ()=>{
    this.props.navigation.navigate('StartHome' )
}


    render(){
return(
    <View style= {styles.container}>

         <NavigationBar
        title={this.titleConfig}
       leftButton={this.rightButtonConfig}
     
      style={{
          backgroundColor:'#1A1461',
          height:60
      }}
       
      />
<View style={styles.FullHead}>

    <View style={styles.PDSHead} > 

<View style={{paddingLeft:18,}}>
<TouchableOpacity  style={{width:150, height:30, }} onPress={this.GoToPdsHome} ><Text style={{fontSize:20, backgroundColor:'#1A1461', color:'white',  padding:10, textAlign:'center'  }}>PDS </Text></TouchableOpacity>

</View>
<View style={{paddingLeft:8}}>
<TouchableOpacity style={{width:150, height:30, }}><Text style={{fontSize:20, backgroundColor:'#1A1461', color:'white',  padding:10, textAlign:'center'}}>JAMB</Text></TouchableOpacity>

</View>

    </View>
    

    <View style={styles.PostHead}>
<View style={{paddingLeft:18}}>

<TouchableOpacity style={{width:150, height:30, }}><Text  style={{fontSize:20, backgroundColor:'#1A1461', color:'white', padding:10 ,textAlign:'center'  }}>POST JAMB </Text></TouchableOpacity>

</View>
<View style={{paddingLeft:7}}>
<TouchableOpacity style={{width:150, height:30, }}><Text  style={{fontSize:20, backgroundColor:'#1A1461', color:'white', padding:10 ,textAlign:'center'    }}>100LEVEL </Text></TouchableOpacity>

</View>

    </View>
    <View style={{paddingTop:30,alignItems:'center' }}>
<TouchableOpacity style={{width:220, height:150, }}><Text  style={{fontSize:20, backgroundColor:'#1A1461', color:'white' ,textAlign:'center' ,padding:10 }}>SYLLABUS</Text></TouchableOpacity>

    </View>
 





</View>

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
  FullHead:{
      paddingTop:250,
  }  ,
  PDSHead:{
      flexDirection:'row',
      
},
PostHead:{
      flexDirection:'row',
      paddingTop:30
},
    
});
