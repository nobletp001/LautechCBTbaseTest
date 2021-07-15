
import * as React from 'react';
import MyTab from './BottomStack';
import StartHome from './StartHome';


import { createStackNavigator } from '@react-navigation/stack';
import Answer from './Question/Answer/answers';
import MyTopNavigation from './Question/Answer/TopStack';
import AccountSignUp from './RegisterStudent';
import MyProfile from './Profile';
import Performance from './Performance';
import FeedBack from './FeedBack';
import Forgetpassword from './Forgetpassword';


const Stack = createStackNavigator();

 export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="myTaps" component={MyTab}
       options={{
        headerShown: false,
    }}
      />

   <Stack.Screen name="StartHome" component={StartHome}
    
     options={{ title: 'LAUTECH CBT',
      headerStyle: {
            backgroundColor: '#1A1461',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:30
        },
headerShown:false
    }}
      />

      <Stack.Screen name="MyTop" component={MyTopNavigation} 
      
      options={{
        headerShown:false
      }}
      />


<Stack.Screen name="pdAswer" component={Answer} 


/>


<Stack.Screen name="acountsigUp" component={AccountSignUp} 
options={{
  headerShown:false
}}

/>

      

<Stack.Screen name="myprofile" component={MyProfile} 
options={{
 title:'PROFILE'
}}

/>


<Stack.Screen name="performance" component={Performance} 
options={{
 title:'PERFORMANCE'
}}

/>

<Stack.Screen name="feedback" component={FeedBack} 
options={{
 title:'FEEDBACK'
}}

/>


<Stack.Screen name="forgetpassword" component={Forgetpassword} 
options={{
 title:'SETTINGS'
}}

/>
    </Stack.Navigator>
  );
}