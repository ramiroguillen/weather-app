import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utils/weatherType'

const CurrentWeather = ({ weatherData }) => {
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData

  const weatherCondition = weather[0]?.main

  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message
  } = styles

  return (
    <SafeAreaView style={[wrapper]}>
      <ImageBackground
        style={[wrapper]}
        source={weatherType[weatherCondition].imageSource}
      >
        <View style={container}>
          <Feather
            name={weatherType[weatherCondition].icon}
            size={100}
            color="white"
          />
          <Text style={tempStyles}>{`${temp}°`}</Text>
          <Text style={feels}>{`Feels like: ${feels_like}°`}</Text>
          <RowText
            messageOne={`High: ${temp_max}° `}
            messageTwo={`Low: ${temp_min}°`}
            container={highLowWrapper}
            messageOneStyles={highLow}
            messageTwoStyles={highLow}
          />
        </View>
        <RowText
          messageOne={weather[0].description}
          messageTwo={weatherType[weatherCondition].message}
          container={bodyWrapper}
          messageOneStyles={description}
          messageTwoStyles={message}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempStyles: { color: 'black', fontSize: 48 },
  feels: { color: 'black', fontSize: 30 },
  highLowWrapper: { flexDirection: 'row' },
  highLow: { color: 'black', fontSize: 20 },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: { fontSize: 48 },
  message: { fontSize: 30 }
})

export default CurrentWeather
