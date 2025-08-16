import { View, Text, Image } from 'react-native'
import React from 'react'
import batLogo from '../../../assets/batLogo.png'

import { styles } from './BatLogoStyles'

export default function BatLogo() {
  return (
    <>
      <Image
        source={batLogo}
        style={styles.image}
      />
    </>
  )
}