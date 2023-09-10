import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductItem = ({item}) => {
  return (
    <View style={styles.container}>
        <Image
          height={90}
          width={90}
          source={{ uri: item.thumbnail }}
        />
        <Text style={styles.text}
          numberOfLines={2}
          adjustsFontSizeToFit={true}
        >{item.title}</Text>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        marginHorizontal:20,
        marginVertical: 10,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        height: 150,
        width:'40%',
        padding:0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
      paddingRight: 5,
      paddingLeft: 5,
        fontSize:20,
        fontWeight: "600",
        flexWrap: 'wrap',
    },
})