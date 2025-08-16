import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'

import { styles } from './BatFormStyles'
import BatLogo from '../BatLogo/BatLogo'
import BatInput from '../BatInput/BatInput'
import CustomButton from '../CustomButton/CustomButton'


export default function BatForm() {

  const [name, setName] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [localization, setLocalization] = useState<string>("")

  function resetFields() {
    setName('')
    setPhone('')
    setLocalization('')

    console.log('reset fieldssss')
  }

  function handleSubmit() {

    Alert.alert(
      'CHAMANDO!',
      `Para: ${name}\nContato: ${phone}\nOnde: ${localization}`,
      [
        { text: 'OK', onPress: () => { resetFields() } }
      ]
    )

  }

  return (
    <View style={styles.container}>

      <View style={styles.batLogoContainer}>
        <BatLogo />
      </View>

      <>
        <BatInput
          label="Seu nome"
          keyboardType='default'
          onChange={(text) => setName(text)}
          value={name}
          multiline={false}
          numberOfLines={1}
        />

        <BatInput
          label="Telefone"
          keyboardType='phone-pad'
          onChange={(text) => setPhone(text)}
          value={phone}
          multiline={false}
          numberOfLines={1}
        />

        <BatInput
          label="Localização"
          keyboardType='default'
          onChange={(text) => setLocalization(text)}
          value={localization}
          multiline={false}
          numberOfLines={4}
        />

        <View>
          <CustomButton
            handleTap={handleSubmit}
            title='ATIVAR'
          />
        </View>

      </>

    </View>
  )
}