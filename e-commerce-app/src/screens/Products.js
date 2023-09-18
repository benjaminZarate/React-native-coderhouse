import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../Components/Search'
import Header from '../Components/Header'
import { products } from '../data/products'
import ProductItem from '../Components/ProductItem'
import ProductDetail from './ProductDetail'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Products = ({text, navigation}) => {
  const [categoryProd, setCategoryProd] = useState([]);

  useEffect(() => {
    if(text)
    {
      const titleProduct = products.filter((el) => el.title.toLowerCase().includes(text));
      setCategoryProd(titleProduct);
    }else{
      setCategoryProd(products);
    }
  }, [text]);

  return (
    <View>
        <FlatList
            data={categoryProd}
            keyExtractor={products.id}
            renderItem={({ item }) => <ProductItem item={item} navigation={navigation}/>}
            numColumns={2}
        />  
    </View>
  )
}

export default Products