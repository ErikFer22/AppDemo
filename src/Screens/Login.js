import {  Box, Center,Heading,FormControl,Input,Button,Link,Text,HStack,VStack } from "native-base";
import React from "react";


const Login = ({navigation}) => {
    return <Center w="100%">
        <Box alignSelf="center" safeArea p="2" py="8" w="90%" maxW="290">
          <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }}>
            Scar 
          </Heading>
          <Heading mt="1" _dark={{
          color: "warmGray.200"
        }} color="coolGray.600" fontWeight="medium" size="xs">
            Inicia sesion para continuar
          </Heading>
  
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Usuario</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Contraseña</FormControl.Label>
              <Input type="password" />
              <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.500"
            }} alignSelf="flex-end" mt="1">
                Olvidaste tu contraseña?
              </Link>
            </FormControl>
            <Button 
            onPress={() => navigation.navigate(screen.home)}
            mt="2" colorScheme="green">
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
                Soy nuevo usuario.{" "}
              </Text>
              <Link 
              _text 
              to ={{ 
              color: "indigo.500",
              fontWeight: "medium",
              fontSize: "sm"
              
            }} href="#"
               onPress={() => navigation.navigate(screen.singup)}>
                Registrarse
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>;
  };

  export default  Login;