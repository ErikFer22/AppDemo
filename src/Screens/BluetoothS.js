import { View, Text, CheckBox } from 'react-native'
import React from 'react'

// Native base imports
import { Button,VStack,Center,Box,HStack  } from "native-base";

const BluetoothS = ({ navigation }) => {
  return (
    <View flex="1"alignItems="center" justifyContent= "center"  >
      <VStack space="8" justifyContent="space-between" flex="1" >
        <HStack  bg="coolGray.300" justifyContent="space-between">
        <VStack >
        <Center w="100%" h="20" >
          <Box 
           _text={{
        fontWeight: "bold",
        color: "black"
         }}>
        OBCDDI
        
        </Box>
        <Box 
        _text={{
        fontWeight: "bold",
        color: "black"
        }}>00000000000
       
          </Box>

        </Center>
        
        </VStack>
        </HStack>
        <HStack  bg="coolGray.300" justifyContent="space-between">
        <VStack >
        <Center w="100%" h="20" >
          <Box 
           _text={{
        fontWeight: "bold",
        color: "black"
         }}>
        OBCDDI
        
        </Box>
        <Box 
        _text={{
        fontWeight: "bold",
        color: "black"
        }}>00000000000
       
          </Box>

        </Center>
        
        </VStack>
        </HStack>
        <HStack  bg="coolGray.300" justifyContent="space-between">
        <VStack >
        <Center w="100%" h="20" >
          <Box 
           _text={{
        fontWeight: "bold",
        color: "black"
         }}>
        OBCDDI
        
        </Box>
        <Box 
        _text={{
        fontWeight: "bold",
        color: "black"
        }}>00000000000
       
          </Box>

        </Center>
        
        </VStack>
        </HStack>
        <VStack  justifyItems="end" >
      <HStack w="100%" h="30" marginTop="180"  >
          <Button bgColor="green.600" w="100%" h="30" _text={{
            frontWeight: "bold",
            frontSize: "lg",
            color: "black"
          }}>Actualizar</Button>

        </HStack>
      </VStack>

      </VStack>
    </View>
  )
}

export default BluetoothS