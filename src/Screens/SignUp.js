import { NativeBaseProvider, Box, Center,Heading,
  FormControl,Input,Button,Link,Text,HStack,VStack } from "native-base";
import React from "react";

const singup = ({navigation}) => {
  return <Center w="100%">
      <Box safeArea p="2" w="100%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          Bienvenido
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
          Registrate para continuar
        </Heading>
        <VStack space={3} mt="5">
          <HStack mt="6" justifyContent="center" >
            <Input w = "50%" placeholder="Nombre" />
            <Input w = "50%" placeholder="Apellido"/>
          </HStack>
          <FormControl>
            <Input w ="100% "placeholder="Correo electronico" />
          </FormControl>
          <FormControl>
            <Input placeholder="Numero de telefono" />
          </FormControl>
          <FormControl>
            <Input placeholder= "Contraseña" type="password" />
          </FormControl>
          <FormControl>

            <Input placeholder= "Confirmar contraseña" type="password" />
          </FormControl>
            <HStack mt="6" justifyContent="center" space={2}>
                <Button w = "50%" 
              onPress={() => navigation.goBack()}
              mt="2"
              colorScheme="gray">
                Atras
              </Button>
              <Button w = "50%"
              onPress={() => navigation.navigate('login')}
              mt="2"
              colorScheme="green">
                Siguiente
              </Button>

            </HStack>
        </VStack>
      </Box>
    </Center>;
};

export default singup;