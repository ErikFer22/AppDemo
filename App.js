import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './components/Screens/login';
import singup from './components/Screens/singup';
import post from './components/Screens/Post';
import HomeScreen from './components/Screens/HomeScreen';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
    <NativeBaseProvider>
    <Stack.Navigator initialRouteName='login'>
      <Stack.Screen
        name="login"
        component={login}
        options={{title: 'login'}}
      />
      <Stack.Screen 
        name="singup"
        component={singup}
        options={{ title: 'sing-up' }}
      />
      <Stack.Screen 
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen 
        name="Post"
        component={post}
        options={{ title: 'Post' }}
      />
      
    </Stack.Navigator>
    </NativeBaseProvider>
   </NavigationContainer>
  );
}


