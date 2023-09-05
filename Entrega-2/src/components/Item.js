import { View, Text, Pressable} from 'react-native'
import CheckBox from 'expo-checkbox';
import React, {useState} from 'react'
import {styles} from '../styles/Styles'
import DeleteModal from './DeleteModal';

const Item = ({element, removeItem}) => {
  const [isSelected, setSelection] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Pressable
          onPress={() => {setIsModalVisible(true)}}>
            <Text style={[
            styles.label,
            isSelected ?
            { color: 'grey',
            textDecorationLine: 'line-through'} 
            : { color: 'white' }]}>{element.nombre}</Text>
          </Pressable>
          <DeleteModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} removeItem={removeItem} element={element}/>
      </View>
  )
}

export default Item