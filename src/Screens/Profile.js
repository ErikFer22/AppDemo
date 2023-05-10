import { View } from 'react-native'
import React from 'react'

// Native base imports
import { Box, HStack, Text,  Icon, Menu, Pressable, Center,Image,VStack,Button } from "native-base";

const Profile = ({ navigation }) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <HStack w="64" h="20" justifyContent="center">
         <Image 
         size={100} 
         borderRadius={100} source={{
          uri: "https://img.freepik.com/vector-premium/icono-perfil-avatar_188544-4755.jpg?w=2000"
        }} alt="Foto de perfil" />
      </HStack>
      <VStack space={2} alignItems="center">
        <Text bold>
          email@gmail.com
        </Text>
        
        <Text italic>
          Nombre y apellido
        </Text>

        <Text italic>
          Tu auto es un : 
        </Text>
      </VStack>
      <HStack>
        <VStack>
          <Button  mt='10' onPress={() => navigation.navigate(screen.cardata)}>Cambiar de auto</Button>
        </VStack>
        <VStack>
          <Button  mt='10' onPress={() => navigation.navigate(screen.login)}>Cerrar sesión</Button>
        </VStack>
      </HStack>
    </View>
  )
}

export default Profile