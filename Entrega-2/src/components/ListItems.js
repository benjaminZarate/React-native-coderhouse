import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Item from './Item'

const ListItems = ({list, removeItem}) => {

    return (
        <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Item element = {item} removeItem={removeItem}/>}/>
    )
}

export default ListItems