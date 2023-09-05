import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {styles} from '../styles/Styles';

const FloatingButton = (props) => {
    
    const clickHandler = () => {
        //function to handle click on floating Action Button
        props.setIsModalVisible(true);
    };

  return (
    <TouchableOpacity
        activeOpacity={0.7}
        onPress={clickHandler}
        style={styles.touchableStyle}>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
          }}
          //source={require('./images/float-add-icon.png')}
          style={styles.floatingButtonStyle}
        />
    </TouchableOpacity>
  )
}

export default FloatingButton