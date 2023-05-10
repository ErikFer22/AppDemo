import { View, Text } from 'react-native'
import React from 'react'

// Native base imports
import { Button } from "native-base";

const AutomotiveService1 = ({ navigation }) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Servicio a los 5,000 Km</Text>
      
      <CheckBox checked size={24} /><Text>Cambio de aceite y filtro</Text>
      <CheckBox checked size={24} /><Text>Limpieza del filtro de aire, de gasolina y las bujías</Text>
      <CheckBox checked size={24} /><Text>Revisión de luces</Text>
      <CheckBox checked size={24} /><Text>Ajuste del tiempo de encendido</Text>
      <CheckBox checked size={24} /><Text>Revisión de clutch</Text>
      <CheckBox checked size={24} /><Text>Nivelar la bateria</Text>
      <CheckBox checked size={24} /><Text>Revisar el tren delantero</Text>
      <Button mt='5' onPress={() => navigation.goBack()}>Guardar</Button>
      <Button mt='5' onPress={() => navigation.goBack()}>Go Back</Button>
    </View>
  )
}

export default AutomotiveService1