import { View, Text, Image, StyleSheet } from 'react-native'
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
        <View style={styles.container}>

          <Text style={styles.brand}>{item.brand}</Text>
          <View style={styles.containerTitlePrice}>
            <Text style={styles.font25}>{item.title}</Text>
            <View style={styles.containerPrices}>
              <Text style={[styles.container, styles.font25]}>${item.price}</Text>
              <Text style={[styles.font25, styles.discountPrice]}>{Math.round((item.price * 100) / (100-item.discountPercentage))}</Text>
              </View>

          </View>
          <View style={styles.containerPrices}>
            <AntDesign name="star" size={24} color="black" />
            <Text styles={[styles.container, styles.font25]}>{item.rating}</Text>
          </View>
          <Text>{item.description}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 5,
  },
  brand:{
    fontSize: 20
  },
  containerTitlePrice:{
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  containerPrices:{
    flexDirection: 'row',
  },
  font25:{
    fontSize: 25
  },
  discountPrice:{
    textDecorationLine: 'line-through',
    color: 'grey'
  }
});

export default ProductDetail