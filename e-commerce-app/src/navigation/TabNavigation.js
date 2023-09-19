import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Products from '../screens/Products';
import profile from '../screens/profile';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen component={profile} name="home"/>
        <Tab.Screen component={profile} name="products" />
    </Tab.Navigator>
  )
}

export default TabNavigation