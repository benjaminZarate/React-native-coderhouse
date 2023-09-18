import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import {colors} from '../theme/colors.js'

const Search = ({text, setText}) => {
  const clearText = () => 
  {
    setText(null);
  }
  return (
    <View style= {styles.container}>
      <TextInput
        onChangeText={(value) => setText(value)}
        value={text}
        style={styles.input}
        placeholder='busca un producto aqui'
      />
      <Pressable onPress={() => clearText()}>
        <AntDesign name="close" size={24} color="black" />
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 30,
  },
  input: {
    width: "78%",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.heavyBlue,
    padding: 10,
    fontSize: 20,
    marginRight: 15,
    backgroundColor: 'white',
  },
});

export default Search