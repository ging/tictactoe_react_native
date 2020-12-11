import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './app/components/IndexScreen';
import GameScreen from './app/components/GameScreen';
  
 
const Stack = createStackNavigator(); 
export default function App() { 
   return ( 
      <NavigationContainer> 
         <Stack.Navigator initialRouteName="Home"> 
            <Stack.Screen name="Home" component={IndexScreen} />
            <Stack.Screen name="GameScreen" component={GameScreen} /> 
         </Stack.Navigator> 
      </NavigationContainer> 
	); 
}
