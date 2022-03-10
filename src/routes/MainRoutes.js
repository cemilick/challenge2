import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from '../screens/Home';
import List from '../screens/List';
import Profile from '../screens/Profile';
import Icons from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function MainRoutes() {
  return (
    <SafeAreaProvider>
      <Tab.Navigator screenOptions={{headerShown: false, tabBarActiveTintColor: '#0D28A6', style:{elevation: 2}}} initialRouteName="Home">
        <Tab.Screen name='Home' component={Home} options={{tabBarIcon:({color}) => {
          return (
            <Icons name='home' size={15} color={color} />
          )}}}/>

        <Tab.Screen name='List' component={List} options={{tabBarIcon: ({color}) => {
          return (
            <Icons name='list' size={15} color={color} />
          )
        }}}/>
        <Tab.Screen name='Profile' component={Profile} options={{tabBarIcon: ({color}) => {
          return (
            <Icons name='user' size={15} color={color} />
          )
        }}} />
      </Tab.Navigator>
    </SafeAreaProvider>
  )
}