import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyComponent from './android/app/src/MyComponent'
import AppTheme from './android/app/src/AppTheme'

const App = () => {
  return (
    <SafeAreaView>
      {/* <MyComponent /> */}
      <AppTheme />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})