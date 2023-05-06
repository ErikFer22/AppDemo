import { View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

import { Box, Text, HStack, Icon, Menu, Pressable, Center,Image,VStack,Button } from "native-base";
// MaterialIcons 
import {  MaterialIcons } from '@expo/vector-icons';



const Home = ({ navigation }) => {
  
  return (
    <View>
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
        <Box safeAreaTop="6" >
        <VStack space={10}  alignItems="center" justifyContent="space-between"
        >
          <HStack w="64" h="20" justifyContent="space-between">
         <Image 
         size={100} 
         
         borderRadius={100} source={{
          uri: "https://cdn-icons-png.flaticon.com/512/4426/4426733.png"
        }} alt="codigo de motor" />
          <Button  mt='10' onPress={() => navigation.navigate(screen.fallas)}>Codigo de motor</Button>
          </HStack>
          <HStack w="64" h="20"  alignItems="center" space={6} >
            
         <Image size={100} 
         
         borderRadius={100} source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaTlGtxMPOTzb2FRLUiumVmpkgHlwauUv6Cw&usqp=CAU"
        }} alt="Tablero" />
          <Button mt='10' onPress={() => navigation.navigate(screen.board)}>Tablero</Button>
          </HStack>
          <HStack w="64" h="20" alignItems="center" space={6}  >
         <Image size={100} 
         
         borderRadius={100} source={{
          uri: "https://static.vecteezy.com/system/resources/previews/020/347/683/non_2x/emissions-test-icon-vector.jpg"
        }} alt="prueba de emisiones" />
          <Button mt='10' onPress={() => navigation.navigate(screen.emissions)}>Prueba de emisiones</Button>
          </HStack>
        </VStack>
        
      </Box>
      <Box safeAreaTop= "8">
        <VStack space="8"  alignItems="center" justifyContent="space-between">
        <HStack w="100%" h="10" justifyContent="space-between">
        <Center w="50%" h="10" >
        <Box _text={{
        fontWeight: "bold",
        fontSize: "lg",
        color: "black"
      }}>
          ELM:
        </Box>
      </Center>
      <Center w="50%" h="10" >
        <Box _text={{
        fontWeight: "bold",
        fontSize: "lg",
        color: "#FF0000"
      }}>
          Desconectado
        </Box>
      </Center>
        </HStack>
        <HStack w="100%" h="10" justifyContent="space-between">
        <Center w="50%" h="10" >
        <Box _text={{
        fontWeight: "bold",
        fontSize: "lg",
        color: "black"
      }}>
          ECU:
        </Box>
      </Center>
      <Center w="50%" h="10" >
        <Box _text={{
        fontWeight: "bold",
        fontSize: "lg",
        color: "#FF0000"
      }}>
          Desconectado
        </Box>
      </Center>
        </HStack>
        <HStack  bgColor="green.600"  alignItems="end">
          <Button safeAreaBottom bgColor="green.600" w="100%" h="30" _text={{
            frontWeight: "bold",
            frontSize: "lg",
            color: "black"
          }}>Conectate</Button>

        </HStack>
        </VStack>
        

      </Box>
      
    </View>
  )
}

export default Home