import { View, Text } from 'react-native'
import React from 'react'

// Native base imports
import { Button } from "native-base";

const AutomotiveService2 = ({ navigation }) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Servicio a los 10,000 Km</Text>

      <CheckBox checked size={24} /><Text>Cambio de bujías</Text>
      <CheckBox checked size={24} /><Text>Cambio de aceite y filtro</Text>
      <CheckBox checked size={24} /><Text>Cambio del filtro de gasolina y aire</Text>
      <CheckBox checked size={24} /><Text>Cambio del refrígerante</Text>
      <CheckBox checked size={24} /><Text>Cambio de la faja del alternador</Text>
      <CheckBox checked size={24} /><Text>Ajuste del tiempo de encendido</Text>
      <CheckBox checked size={24} /><Text>Revision de las luces y los faros</Text>
      <CheckBox checked size={24} /><Text>Ajuste del clutch</Text>
      <CheckBox checked size={24} /><Text>Revisión de los nivles de: caja, la bateria e hidraulico</Text>
      <CheckBox checked size={24} /><Text>Limpieza de terminales de bateria</Text>
      <CheckBox checked size={24} /><Text>Revisión de los frenos y el tren delantero</Text>

      <Button mt='5' onPress={() => navigation.goBack()}>Guardar</Button>
      <Button mt='5' onPress={() => navigation.goBack()}>Go Back</Button>
    </View>
  )
}

export default AutomotiveService2