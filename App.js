import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainRoutes from './src/routes/MainRoutes'
import SplashScreen from 'react-native-splash-screen'

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  })
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  )
}