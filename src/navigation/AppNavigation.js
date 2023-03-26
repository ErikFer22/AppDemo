import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screen from '../utils/screenNames';
// Screens imports
import Home from '../screens/Home'
import ScreenSettings from '../screens/ScreenSettings'
import Help from '../screens/Help'
import Search from '../screens/Search'
import Favorite from '../screens/Favorite'




const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName={screen.home}
      screenOptions={{headerShown: false}}
    >
        <Stack.Screen 
            name={screen.home} 
            component={Home} 
        />

        <Stack.Screen 
            name={screen.settings} 
            component={ScreenSettings} 
        />

        <Stack.Screen 
            name={screen.help} 
            component={Help} 
        />

        <Stack.Screen 
            name={screen.search} 
            component={Search} 
        />
        
        <Stack.Screen 
            name={screen.favorite} 
            component={Favorite} 
        />

    </Stack.Navigator>
  )
}

export default AppStack