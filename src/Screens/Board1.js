import { View, Text, Image} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';


// Native base imports
import { Button, HStack  } from "native-base";

const Board1 = ({ navigation }) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar  />
      <Text>Screen Board</Text>
      <Image
          borderRadius={100}
          size={100}
          style={{ width: 200, height: 200, marginBottom: 200 }}
          source={{ uri: "https://cdn.pixabay.com/photo/2013/07/12/18/30/rpm-153397_1280.png" }}
        />
      <HStack space={200}>
      <Text fontSize="6xl" >0 0 km/h</Text>
      <Text fontSize="6xl">95°</Text>
      </HStack>
      
      <Button _text={{color: 'black'}}
      mt='5' bg='gray.200' width='100%' onPress={() => navigation.navigate(screen.sensorReading)}>Todos los sensores</Button>
    </View>
  )
}

export default Board1