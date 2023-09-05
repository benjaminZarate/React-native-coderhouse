import { View, Text } from 'react-native'
import React from 'react'
import {styles} from '../styles/Styles'

const NoItems = () => {
  return (
    <View  style={styles.checkbox}>
      <Text style={styles.whiteText}>No items</Text>
    </View>
  )
}

export default NoItems
