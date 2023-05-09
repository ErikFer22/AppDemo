import { View, Text } from 'react-native'
import React from 'react'

// Native base imports
import { Button,VStack,Center,Box,HStack  } from "native-base";

const SensorReading = ({ navigation }) => {
  return (
    <View flex="1"alignItems="center" justifyContent= "center"  >
      <VStack space={50}>
      <HStack justifyContent="space-between">
        
       
        <Box 
         _text={{
      fontWeight: "bold",
      color: "black"
       }}>
      Voltaje
      
      </Box>
      <Box 
      _text={{
      fontWeight: "bold",
      color: "black"
      }}>14V
     
        </Box>

     
  
      </HStack>
      <HStack justifyContent="space-between">
        
       
          <Box 
           _text={{
        fontWeight: "bold",
        color: "black"
         }}>
        Revoluciones del motor
        
        </Box>
        <Box 
        _text={{
        fontWeight: "bold",
        color: "black"
        }}>923 rpm
       
          </Box>

       
    
        </HStack>
        <HStack justifyContent="space-between">
        
       
          <Box 
           _text={{
        fontWeight: "bold",
        color: "black"
         }}>
        Temperatura del anticongelante
        
        </Box>
        <Box 
        _text={{
        fontWeight: "bold",
        color: "black"
        }}>95°
       
          </Box>

       
    
        </HStack>
        <HStack justifyContent="space-between">
        
       
          <Box 
           _text={{
        fontWeight: "bold",
        color: "black"
         }}>
        Velocidad del vehículo
        
        </Box>
        <Box 
        _text={{
        fontWeight: "bold",
        color: "black"
        }}>0 km/h
       
          </Box>

       
    
        </HStack>
        <HStack justifyContent="space-between">
        
       
          <Box 
           _text={{
        fontWeight: "bold",
        color: "black"
         }}>
        Combustible usado 
        
        </Box>
        <Box 
        _text={{
        fontWeight: "bold",
        color: "black"
        }}>0.0 L
       
          </Box>

       
    
        </HStack>
        <HStack justifyContent="space-between">
        
       
          <Box 
           _text={{
        fontWeight: "bold",
        color: "black"
         }}>
        Combustible usado 
        
        </Box>
        <Box 
        _text={{
        fontWeight: "bold",
        color: "black"
        }}>0.0 L
       
          </Box>

       
    
        </HStack>
        <HStack justifyContent="space-between">
        
       
          <Box 
           _text={{
        fontWeight: "bold",
        color: "black"
         }}>
        Distancia recorrida 
        
        </Box>
        <Box 
        _text={{
        fontWeight: "bold",
        color: "black"
        }}>0 Km
       
          </Box>

       
    
        </HStack>
        <HStack justifyContent="space-between">
        
       
          <Box 
           _text={{
        fontWeight: "bold",
        color: "black"
         }}>
        Potencia instantánea del motor
        
        </Box>
        <Box 
        _text={{
        fontWeight: "bold",
        color: "black"
        }}>4.2 hp
       
          </Box>

       
    
        </HStack>
        <HStack justifyContent="space-between">
        
       
          <Box 
           _text={{
        fontWeight: "bold",
        color: "black"
         }}>
        Consumo medio del combustible 
        
        </Box>
        <Box 
        _text={{
        fontWeight: "bold",
        color: "black"
        }}>0 km/L
       
          </Box>

       
    
        </HStack>
        </VStack>
    </View>
  )
}

export default SensorReading