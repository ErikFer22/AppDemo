import { View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Box, Text, HStack, Icon, Menu, Pressable, IconButton } from "native-base";
// MaterialIcons 
import { MaterialIcons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <View>
      <StatusBar  />
      <Box safeAreaTop bg="violet.600" />
      <HStack bg="violet.600" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="100%">
      <HStack alignItems="center">
          <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white"
          onPress={() => alert("Menu de hamburguesa no desbloqueado uwu")} />} />
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack>
          <IconButton icon={<Icon as={MaterialIcons} name="camera" size="sm" color="white"
          onPress={() => navigation.navigate(screen.favorite)} />} />
          <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" 
          onPress={() => navigation.navigate(screen.search)}/>} />
          <Menu 
            w="190" 
            trigger={triggerProps => {
              return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                      <Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />
                    </Pressable>
              }}>
            <Menu.Item onPress={() => navigation.navigate(screen.settings)}>Settings</Menu.Item>
            <Menu.Item onPress={() => navigation.navigate(screen.help)}>Help</Menu.Item>

          </Menu>

        </HStack>
      </HStack>
    </View>
  )
}

export default Home