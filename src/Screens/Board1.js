import { View, Text } from 'react-native'
import React from 'react'


// Native base imports
import { Button  } from "native-base";

const Board = ({ navigation }) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Screen Board</Text>
    
      <Button mt='5' onPress={() => navigation.goBack()}>Go menu</Button>
    </View>
  )
}

export default Board