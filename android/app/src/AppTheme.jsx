import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'

const AppTheme = () => {
    const theme = useColorScheme();

    const isWhiteTheme = theme === 'light';




    
  return (
    <View style={styles.container}>
      <Text >AppTheme</Text>
    </View>
  )
}

export default AppTheme

const styles = StyleSheet.create({
    container :{
        justifyContent:"center",
        display:"flex",
        alignItems:"center",
        backgroundColor:"lightpink",
        width:'100%',
        height:"100%",
    },
    
})