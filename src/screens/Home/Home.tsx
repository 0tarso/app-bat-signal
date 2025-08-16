import { View, Text, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'

import { styles } from './Style'
import BatLogo from '../../components/BatLogo/BatLogo'
import CustomButton from '../../components/CustomButton/CustomButton'
import BatForm from '../../components/BatForm/BatForm'

export default function Home() {

  const [activeForm, setActiveForm] = useState<boolean>(false)

  function handleShowForm() {
    setActiveForm(!activeForm)
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // padding no iOS, height no Android
      keyboardVerticalOffset={10} // ajuste se tiver header no topo
    >
      <ScrollView style={styles.containerScroll}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.container}>

          {activeForm
            ? (
              <>
                <BatForm />

                <Text onPress={handleShowForm}
                  style={{ color: '#5a5a5a', textAlign: 'center', marginTop: 15, fontSize: 20 }}
                >Voltar</Text>
              </>
            )
            : (
              <>
                <View style={styles.batlogoContainer}>
                  <BatLogo />
                </View>

                <View style={styles.buttonContainer}>
                  <CustomButton
                    handleTap={handleShowForm}
                    title='Ativar Bat-sinal'
                  />
                </View>
              </>
            )
          }
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}