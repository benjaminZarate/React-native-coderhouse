import Home from '../screens/Home'
import React from 'react'
import ProductDetail from '../screens/ProductDetail'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen component={Home} name="home"/>
      <Stack.Screen component={ProductDetail} name="productDetail"/>
    </Stack.Navigator>
  );
};

export default RootNavigation;