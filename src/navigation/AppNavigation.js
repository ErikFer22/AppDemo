import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screen from '../utils/screenNames';
// Screens imports
import Home from '../Screens/Home'
import ScreenSettings from '../Screens/ScreenSettings'
import Splash from '../Screens/Splash';
import SignUp from '../Screens/SignUp';
import ServicesCatalog from '../Screens/ServicesCatalog';
import SensorReading from '../Screens/SensorReading';
import Profile from '../Screens/Profile';
import Login from '../Screens/Login';
import EmissionsTest from '../Screens/EmissionsTest';
import CarData from '../Screens/CarData';
import Board from '../Screens/board';
import BluetoothS from '../Screens/BluetoothS';
import AutomotiveService1 from '../Screens/AutomotiveService1';
import AutomotiveService2 from '../Screens/AutomotiveService2';
import HomeTabs from './HomeTabs';
import DTCFailures from '../Screens/DTCFailures';







const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName={screen.login}
      screenOptions={{headerShown: false}}
    >
        <Stack.Screen 
            name={screen.home} 
            component={HomeTabs} 
        />

        <Stack.Screen 
            name={screen.settings} 
            component={ScreenSettings} 
        />

        <Stack.Screen 
            name={screen.splash} 
            component={Splash} 
        />

        <Stack.Screen 
            name={screen.singup} 
            component={SignUp} 
        />
        
        <Stack.Screen 
            name={screen.servicesCatalog} 
            component={ServicesCatalog} 
        />
        <Stack.Screen 
            name={screen.sensorReading} 
            component={SensorReading} 
        />

        <Stack.Screen 
            name={screen.profile} 
            component={Profile} 
        />

        <Stack.Screen 
            name={screen.login} 
            component={Login} 
        />

        <Stack.Screen 
            name={screen.fallas} 
            component={DTCFailures}
        />
        
        <Stack.Screen 
            name={screen.emissions} 
            component={EmissionsTest} 
        />
        <Stack.Screen 
            name={screen.cardata} 
            component={CarData} 
        />

        <Stack.Screen 
            name={screen.board} 
            component={Board} 
        />

        <Stack.Screen 
            name={screen.blueetooth} 
            component={BluetoothS} 
        />

        <Stack.Screen 
            name={screen.automative1} 
            component={AutomotiveService1} 
        />
        
        <Stack.Screen 
            name={screen.automative2} 
            component={AutomotiveService2} 
        />

    </Stack.Navigator>
  )
}

export default AppStack