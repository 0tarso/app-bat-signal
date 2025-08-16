import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { styles } from './CustomButtonStyles'

interface CustomButtonProps {
  handleTap: () => void
  title: string
}

export default function CustomButton(props: CustomButtonProps) {
  return (
    <TouchableOpacity style={styles.button}
      activeOpacity={0.7}
      onPress={props.handleTap}
    >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  )
}