import { StyleSheet, Text, View } from 'react-native'
import Search from '../Components/Search'
import Products from './Products'
import { useState } from 'react'

const Home = () => {
  const [text, setText] = useState(null)
  return (
    <View>
      <Search text={text} setText={setText}/>
      <Products text={text} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})