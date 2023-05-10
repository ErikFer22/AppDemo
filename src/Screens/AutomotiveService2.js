import { View, Text,CheckBox,StyleSheet} from 'react-native'
import React from 'react'

// Native base imports
import { Button } from "native-base";

const AutomotiveService2 = ({ navigation }) => {
  
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.label}>Servicio a los 10,000 Km</Text>

      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
        />
        <Text style={styles.label}>Cambio de bujías</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
        />
        <Text style={styles.label}>Cambio de aceite y filtro</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
        />
        <Text style={styles.label}>Cambio del filtro de gasolina y aire</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
        />
        <Text style={styles.label}>Cambio del refrígerante</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
        />
        <Text style={styles.label}>Cambio de la faja del alternador</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
        />
        <Text style={styles.label}>Ajuste del tiempo de encendido</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
        />
        <Text style={styles.label}>Revision de las luces y los faros</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
        />
        <Text style={styles.label}>Ajuste del clutch</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
        />
        <Text style={styles.label}>Revisión de los nivles de: caja, la bateria e hidraulico</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
        />
        <Text style={styles.label}>Limpieza de terminales de bateria</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
        />
        <Text style={styles.label}>Revisión de los frenos y el tren delantero</Text>
      </View>
      

      <Button mt='5' bgColor="green.600" width="100%" h="30" onPress={() => navigation.goBack()}>Guardar</Button>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});

export default AutomotiveService2