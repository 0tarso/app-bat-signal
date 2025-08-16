import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

import { styles } from './BatInputStyles'

interface BatInputProps {
  label: string
  keyboardType: "default" | "phone-pad"
  onChange: (e: any) => void
  value: any
  multiline: boolean
  numberOfLines: number
}

export default function BatInput(props: BatInputProps) {

  // const [inputType, setInputType] = useState(props.inputType)

  return (
    <View style={styles.container}>

      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={styles.input}
        onChangeText={(e) => props.onChange(e)}
        keyboardType={props.keyboardType}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
        value={props.value}
      />
    </View>
  )
}