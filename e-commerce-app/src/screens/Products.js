import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../Components/Search'
import Header from '../Components/Header'
import { products } from '../data/products'
import ProductItem from '../Components/ProductItem'
import ProductDetail from './ProductDetail'

const Products = ({text}) => {
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
      <ProductDetail item={products[1]}/>
        <FlatList
            data={categoryProd}
            keyExtractor={products.id}
            renderItem={({ item }) => <ProductItem item={item} />}
            numColumns={2}
        />  
    </View>
  )
}

export default Products