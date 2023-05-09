import { View, Text, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';


// Native base imports
import { Button  } from "native-base";

const Board = ({ navigation }) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar  />
      <Text>Screen Board</Text>
      <Image
          style={{ width: 200, height: 200, marginBottom: 10 }}
          source={{ uri: "https://cdn.pixabay.com/photo/2013/07/12/18/30/rpm-153397_1280.png" }}
        />
      
      <Text>0 0 km/h</Text>
      <Button mt='5' onPress={() => navigation.goBack()}>Go menu</Button>
    </View>
  )
}

export default Board