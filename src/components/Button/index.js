import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Button(props) {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: props.color,
      width: props.width,
      height: props.height,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>      
        <View style={styles.button}>
            {props.children}
        </View>
        <Text>{props.nama}</Text>
      </View>
    </TouchableOpacity>
  )
}

