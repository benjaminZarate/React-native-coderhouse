import { View, Text, Modal, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import {styles} from '../styles/Styles'

const TextModal = ({setIsModalVisible, isModalVisible, addItem}) => {
  const [text, setText] = useState("");
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={isModalVisible}
    style={styles.modalView}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput 
              style={[styles.textInput, styles.whiteText]}
              placeholder='Escriba aqui un item...' 
              placeholderTextColor="#C7C7C7"
              onChangeText={(value) => setText(value)}
              />
              <View style={styles.rowContent}>
                <Pressable onPress={() => { 
                if(text != "")
                {
                  addItem(text); 
                  setText("");
                }
                setIsModalVisible(false); 
                }}><Text style={styles.whiteText}>Confirmar</Text></Pressable>
                <Pressable onPress={() => setIsModalVisible(false)}><Text style={styles.whiteText}>Cancelar</Text></Pressable>
            </View>
          </View>
        </View>
    </Modal>
  )
}

export default TextModal