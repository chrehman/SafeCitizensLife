import React, { useState, useEffect } from 'react'
import { View, Text, Alert } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import AuthStack from './src/Navigations/AuthStack'
import Routes from './src/Navigations/Routes'
import store from './src/redux/store'
import auth from '@react-native-firebase/auth';
import SplashScreen from 'react-native-splash-screen'
import FlashMessage from "react-native-flash-message";

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [])


  
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Routes />
        <FlashMessage position="top" />
      </SafeAreaProvider>

    </Provider>
  )
}

export default App
