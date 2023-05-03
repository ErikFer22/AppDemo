import { View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

import { Box, Text, HStack, Icon, Menu, Pressable, Center,Image,VStack,Button } from "native-base";
// MaterialIcons 
import {  MaterialIcons } from '@expo/vector-icons';

// Native base imports
const ScreenSettings = ({ navigation }) => {
  return (
    
    <View style={{flex: 1, justifyContent: 'justify', alignItems: 'justify'}}>
      <StatusBar  />
        <HStack bg="gray.300" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="100%">
        <HStack alignItems="center">
          <Text color="black" fontSize="20" fontWeight="bold">
            Scar
          </Text>
        </HStack>
        <HStack>
          <Menu 
            w="190" 
            trigger={triggerProps => {
              return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                      <Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />
                    </Pressable>
              }}>
            <Menu.Item onPress={() => navigation.navigate(screen.settings)}>Settings</Menu.Item>
          </Menu>
        </HStack>
       </HStack>
       <Text>Idioma</Text>
       <Text>Modo obscuro</Text>
      <Text>Settings Screen</Text>
      <Button mt='5' onPress={() => navigation.goBack()}>Go Back</Button>
    </View>
  )
}

export default ScreenSettings