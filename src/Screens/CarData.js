
import React from 'react'

// Native base imports
import {Box, CheckIcon, Center, Heading, FormControl, Input, Button, Link, Text, HStack, VStack, Select } from "native-base";

const CarData = ({navigation}) => {
  const [service, setService] = React.useState("");
  return <Center w="100%">
      <Box safeArea p="2" w="100%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          Datos del automovil
        </Heading>
        <VStack space={4} mt="5">
          <Select selectedValue={service} minWidth="200" accessibilityLabel="Marca" placeholder="Marca" _selectedItem={{ bg: "teal.600", endIcon: <CheckIcon size="5" /> }} mt={1} onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="Acura" value="ac" />
            <Select.Item label="Alfa Romeo" value="alfa" />
            <Select.Item label="Aston Martin" value="aston" />
            <Select.Item label="Audi" value="audi" />
            <Select.Item label="BAW" value="baw" />
            <Select.Item label="Bentley" value="ben" />
            <Select.Item label="BMW" value="bmw" />
            <Select.Item label="Brilliance" value="bri" />
            <Select.Item label="Buick" value="bui" />
            <Select.Item label="BYD" value="byd" />
            <Select.Item label="Cadillac" value="cad" />
            <Select.Item label="Chery" value="cher" />
            <Select.Item label="Chevrolet" value="chev" />
            <Select.Item label="Chrysler" value="chry" />
            <Select.Item label="Citroen" value="cit" />
            <Select.Item label="Cupra" value="cup" />
            <Select.Item label="Dacia" value="dac" />
            <Select.Item label="Daewoo" value="dae" />
            <Select.Item label="Daihatsu" value="dai" />
            <Select.Item label="Datsun" value="dat" />
            <Select.Item label="Daytona" value="day" />
            <Select.Item label="DFM" value="dfm" />
            <Select.Item label="Dodge" value="dod" />
            <Select.Item label="Dongfeng" value="don" />
            <Select.Item label="DS" value="ds" />
            <Select.Item label="Euler" value="eu" />
            <Select.Item label="Exeed" value="ex" />
            <Select.Item label="FAW" value="faw" />
            <Select.Item label="Ferrari" value="fer" />
            <Select.Item label="Fiat" value="fia" />
            <Select.Item label="Ford" value="for" />
            <Select.Item label="GAC" value="gac" />
            <Select.Item label="Geely" value="gee" />
            <Select.Item label="General Motors" value="gm" />
            <Select.Item label="Genesis" value="gen" />
            <Select.Item label="Geometry" value="geo" />
            <Select.Item label="GMC" value="gmc" />
            <Select.Item label="Great Wall" value="gre" />
            <Select.Item label="Hafei" value="haf" />
            <Select.Item label="Haima" value="hai" />
            <Select.Item label="Harley-Davidson" value="hd" />
            <Select.Item label="Harvard" value="har" />
            <Select.Item label="Haval" value="hav" />
            <Select.Item label="Holden" value="hol" />
            <Select.Item label="Honda" value="hon" />
            <Select.Item label="Hummer" value="hum" />
            <Select.Item label="Hyundai" value="hyu" />
            <Select.Item label="Indian" value="ind" />
            <Select.Item label="Infiniti" value="inf" />
            <Select.Item label="ISUZU" value="isu" />
            <Select.Item label="JAC" value="jac" />
            <Select.Item label="Jaguar" value="jag" />
            <Select.Item label="Jeep" value="jeep" />
            <Select.Item label="Kia" value="kia" />
            <Select.Item label="KTM" value="ktm" />
            <Select.Item label="Lada" value="lada" />
            <Select.Item label="Lamborghini" value="lam" />
            <Select.Item label="Lancia" value="lancia" />
            <Select.Item label="Land Rover" value="land" />
            <Select.Item label="Lexus" value="lexus" />
            <Select.Item label="Lifan" value="lif" />
            <Select.Item label="Lincoln" value="lin" />
            <Select.Item label="Lotus" value="lot" />
            <Select.Item label="Mahindra" value="mah" />
            <Select.Item label="Mando" value="man" />
            <Select.Item label="Maserati" value="mas" />
            <Select.Item label="Maxus" value="max" />
            <Select.Item label="Mazda" value="maz" />
            <Select.Item label="McLaren" value="mcl" />
            <Select.Item label="Mercedes-Benz" value="mb" />
            <Select.Item label="Mercury" value="mer" />
            <Select.Item label="MG" value="mg" />
            <Select.Item label="Mini" value="mini" />
            <Select.Item label="Mitsubishi" value="mit" />
            <Select.Item label="Nissan" value="niss" />
            <Select.Item label="Oldsmobile" value="old" />
            <Select.Item label="Opel" value="op" />
            <Select.Item label="Ora" value="ora" />
            <Select.Item label="Peugeot" value="peu" />
            <Select.Item label="Pontiac" value="pon" />
            <Select.Item label="Porsche" value="por" />
            <Select.Item label="Proton" value="pro" />
            <Select.Item label="RAM" value="ram" />
            <Select.Item label="Range Rover" value="ran" />
            <Select.Item label="Ravon" value="rav" />
            <Select.Item label="Renault" value="ren" />
            <Select.Item label="Roewe" value="roe" />
            <Select.Item label="Rover" value="rov" />
            <Select.Item label="Saab" value="saa" />
            <Select.Item label="SAIC Roewe" value="sai" />
            <Select.Item label="Samsung" value="sam" />
            <Select.Item label="Saturn" value="sat" />
            <Select.Item label="Scion" value="sci" />
            <Select.Item label="Seat" value="seat" />
            <Select.Item label="Sehol" value="seh" />
            <Select.Item label="Skoda" value="sko" />
            <Select.Item label="Smart" value="sma" />
            <Select.Item label="SsangYong" value="ssa" />
            <Select.Item label="Subaru" value="sub" />
            <Select.Item label="Suzuki" value="suz" />
            <Select.Item label="Tata" value="tata" />
            <Select.Item label="Tesla" value="tes" />
            <Select.Item label="Toyota" value="toy" />
            <Select.Item label="Vauxhall" value="vau" />
            <Select.Item label="Volkswagen" value="vw" />
            <Select.Item label="Volvo" value="vol" />
            <Select.Item label="Vortex" value="vor" />
            <Select.Item label="ZAZ" value="zaz" />
            <Select.Item label="Zotye" value="zot" />
            <Select.Item label="BA3" value="ba3" />
            <Select.Item label="(Otra Marca)" value="otra" />
          </Select>
          <Select selectedValue={service} minWidth="200" accessibilityLabel="Modelo" placeholder="Modelo" _selectedItem={{ bg: "teal.600", endIcon: <CheckIcon size="5" /> }} mt={1} onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="1990" value="90" />
            <Select.Item label="1991" value="91" />
            <Select.Item label="1992" value="92" />
            <Select.Item label="1993" value="93" />
            <Select.Item label="1994" value="94" />
            <Select.Item label="1995" value="95" />
            <Select.Item label="1996" value="96" />
            <Select.Item label="1997" value="97" />
            <Select.Item label="1998" value="98" />
            <Select.Item label="1999" value="99" />
            <Select.Item label="2000" value="00" />
            <Select.Item label="2001" value="01" />
            <Select.Item label="2002" value="02" />
            <Select.Item label="2003" value="03" />
            <Select.Item label="2004" value="04" />
            <Select.Item label="2005" value="05" />
            <Select.Item label="2006" value="06" />
            <Select.Item label="2007" value="07" />
            <Select.Item label="2008" value="08" />
            <Select.Item label="2009" value="09" />
            <Select.Item label="2010" value="10" />
            <Select.Item label="2011" value="11" />
            <Select.Item label="2012" value="12" />
            <Select.Item label="2013" value="13" />
            <Select.Item label="2014" value="14" />
            <Select.Item label="2015" value="15" />
            <Select.Item label="2016" value="16" />
            <Select.Item label="2017" value="17" />
            <Select.Item label="2018" value="18" />
            <Select.Item label="2019" value="19" />
            <Select.Item label="2020" value="20" />
            <Select.Item label="2021" value="21" />
            <Select.Item label="2022" value="22" />
            <Select.Item label="2023" value="23" />
          </Select>
          <FormControl.Label>Detalles</FormControl.Label>
          <Select selectedValue={service} minWidth="200" accessibilityLabel="Motor" placeholder="Tipo de motor" _selectedItem={{ bg: "teal.600", endIcon: <CheckIcon size="5" /> }} mt={1} onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="2 cilindros" value="2" />
            <Select.Item label="3 cilindros" value="3" />
            <Select.Item label="4 cilindros" value="4" />
            <Select.Item label="5 cilindros" value="5" />
            <Select.Item label="6 cilindros" value="6" />
            <Select.Item label="8 cilindros" value="8" />
            <Select.Item label="10 cilindros" value="10" />
            <Select.Item label="otro tipo" value="otro" />
          </Select>
            <HStack mt="6" justifyContent="center" space={8}>
                <Button w = "50%" 
              onPress={() => navigation.goBack()}
              mt="2"
              colorScheme="gray">
                Atras
              </Button>
              <Button w = "50%"
              onPress={() => navigation.navigate(screen.login)}
              mt="2"
              colorScheme="green">
                Siguiente
              </Button>
            </HStack>
        </VStack>
      </Box>
    </Center>;
};
export default CarData