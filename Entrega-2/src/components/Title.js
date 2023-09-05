import { View, Text } from 'react-native'
import React from 'react'
import {styles} from '../styles/Styles'

const Title = () => {
  return (
    <View>
      <Text style={[styles.titleContainer, styles.whiteText, styles.checkbox]}>TO-DO List</Text>
    </View>
  )
}

export default Title