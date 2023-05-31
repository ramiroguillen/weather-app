import React from 'react'
import { View, Text } from 'react-native'

const RowText = (props) => {
  const {
    messageOne,
    messageTwo,
    container,
    messageOneStyles,
    messageTwoStyles
  } = props

  return (
    <View style={container}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  )
}

export default RowText
