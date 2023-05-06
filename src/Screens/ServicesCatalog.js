import { View, Text } from 'react-native'
import React from 'react'

// Native base imports
import { Button,VStack,Center,Box,HStack  } from "native-base";


const ServicesCatalog = ({ navigation }) => {
  return (
    <View style={{flex: 1 }}>
      <VStack space="3" alignItems="center" >
        <Center w="64" h="20"  >
        <Text>
          ¿Cuando fue la última revisión?
        </Text>
        </Center>
        
        <Center w="90" h="30" bg="gray.300"  >
        <Text>
            DD/MM/AA
        </Text>
        </Center>
        <Center w="64" h="20"  >
        <Text>
          ¿Cuando fue la última revisión?
        </Text>
        </Center>
        <View style={{ flex: 1, alignItems: 'end', marginTop: 30}}>
          <Button bgColor="green.600" w="100%" h="30" 
          onPress={() => navigation.navigate(screen.automative1)}
          _text={{
                frontWeight: "bold",
                frontSize: "lg",
                color: "black"
              }}>Servicio automotriz a los 5000km</Button>

          </View> 
            
          
          <View style={{ flex: 1, alignItems: 'end', marginTop: 30}}>
          <Button bgColor="green.600" w="100%" h="30"
          onPress={() => navigation.navigate(screen.automative2)}
           _text={{
                frontWeight: "bold",
                frontSize: "lg",
                color: "black"
              }}>Servicio automotriz a los 10000km</Button>

          </View>

      </VStack>
    </View>
  )
}

export default ServicesCatalog