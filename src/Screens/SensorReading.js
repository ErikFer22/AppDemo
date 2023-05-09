import { View, Text } from 'react-native'
import React from 'react'

// Native base imports
import { Button } from "native-base";

const SensorReading = ({ navigation }) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Favorite Screen</Text>
      <Text>Favorite Screen</Text>
      <Text>Favorite Screen</Text>
      <Button mt='5' onPress={() => navigation.goBack()}>Go Back</Button>
    </View>
  )
}

export default SensorReading