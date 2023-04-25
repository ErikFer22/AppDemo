
import React from 'react'

// Native base imports
import { NativeBaseProvider, Box, Center,Heading,
  FormControl,Input,Button,Link,Text,HStack,VStack } from "native-base";

const CarData = ({navigation}) => {
  return <Center w="100%">
      <Box safeArea p="2" w="100%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          Datos del automovil
        </Heading>
        <VStack space={4} mt="5">
          <FormControl>
            <Input w ="100% "placeholder="Marca" />
          </FormControl>
          <FormControl>
            <Input placeholder="Modelo" />
          </FormControl>
          <FormControl.Label>Detalles</FormControl.Label>
              <Input placeholder="Tipo de motor"/>
            <HStack mt="6" justifyContent="center" space={8}>
                <Button w = "50%" 
              onPress={() => navigation.goBack()}
              mt="2"
              colorScheme="gray">
                Atras
              </Button>
              <Button w = "50%"
              onPress={() => navigation.navigate(screen.login)}
              mt="2"
              colorScheme="green">
                Siguiente
              </Button>

            </HStack>
        </VStack>
      </Box>
    </Center>;
};
export default CarData