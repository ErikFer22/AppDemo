import { View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Box, Text, HStack, Icon, Menu, Pressable, IconButton,Image,VStack } from "native-base";
// MaterialIcons 
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const Home = ({ navigation }) => {
  const [selected, setSelected] = React.useState(1);
  return (
    <View>
      
      <Box safeAreaTop="6" >
        <VStack space={10} justifyContent="space-between" alignItems="center" 
        mb={6}>
          <HStack space={6} alignItems="center">
         <Image size={100} borderRadius={100} source={{
          uri: "https://cdn-icons-png.flaticon.com/512/4426/4426733.png"
        }} alt="codigo de motor" />
          <Text alignItems="center" >
            Codigo de motor
          </Text>
          </HStack>
          <HStack space={6} alignItems="center" >
         <Image size={100} borderRadius={100} source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaTlGtxMPOTzb2FRLUiumVmpkgHlwauUv6Cw&usqp=CAU"
        }} alt="Tablero" />
          <Text>
            Tablero de instrumento
          </Text>
          </HStack>
          <HStack alignItems="center" space={6} >
         <Image size={100} borderRadius={100} source={{
          uri: "https://static.vecteezy.com/system/resources/previews/020/347/683/non_2x/emissions-test-icon-vector.jpg"
        }} alt="prueba de emisiones" />
          <Text>
            Prueba de emisiones
          </Text>
          </HStack>
  
        </VStack>
      </Box>
      
    </View>
  )
}

export default Home