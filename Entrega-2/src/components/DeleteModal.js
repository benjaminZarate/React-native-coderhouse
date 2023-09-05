import { View, Text, Modal, Pressable } from 'react-native'
import React from 'react'
import {styles} from '../styles/Styles'

const DeleteModal = ({setIsModalVisible, isModalVisible, removeItem, element}) => {
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={isModalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.whiteText}>Deseas eliminar este elemento?</Text>
            <View style={styles.rowContent}>
              <Pressable onPress={() => { removeItem(element.id); setIsModalVisible(false); }}><Text style={styles.whiteText}>Confirmar</Text></Pressable>
              <Pressable onPress={() => setIsModalVisible(false)}><Text style={styles.whiteText}>Cancelar</Text></Pressable>
            </View>
          </View>
        </View>
    </Modal>
  )
}

export default DeleteModal