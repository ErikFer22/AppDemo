import { View, Text, VStack, HStack } from 'react-native'
import React from 'react'

// Native base imports
import { Button } from "native-base";

const DTCFailures= ({ navigation }) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Favorite DTCFailures</Text>
          <Button style={{marginTop: 350}}
          bgColor="red.600" w="100%" h="30" _text={{
            frontWeight: "bold",
            frontSize: "lg",
            color: "black"
          }}>Borrar fallas DTC encontradas</Button>

    </View>
  )
}

export default DTCFailures