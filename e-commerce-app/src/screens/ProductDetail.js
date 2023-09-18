import { View, Text, Image } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import { AntDesign } from '@expo/vector-icons';
import Header from '../Components/Header';

const ProductDetail = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <View>
      <Header navigation={navigation} title={item.title}/>
        <Image 
            width='100%'
            height={200}
            source={{uri: item.thumbnail}}/>
        <Text>{item.brand}</Text>
        <Text>{item.title}</Text>
        <Text>${item.price}</Text>
        <Text>{Math.round((item.price * 100) / (100-item.discountPercentage))}</Text>
        <AntDesign name="star" size={24} color="black" />
        <Text>{item.rating}</Text>
        <Text>{item.description}</Text>
    </View>
  )
}

export default ProductDetail