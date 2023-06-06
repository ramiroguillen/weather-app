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
    card,
    tempStyles,
    feels,
    highLowWrapper,
    highLow
  } = styles

  return (
    <SafeAreaView style={[wrapper]}>
      <ImageBackground
        style={[wrapper]}
        source={weatherType[weatherCondition].imageSource}
      >
        <View style={container}>
          <View style={card}>
            <Feather
              name={weatherType[weatherCondition].icon}
              size={100}
              color="black"
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
        </View>
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
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    padding:50,
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius:10,
    borderWidth:1
  },

  tempStyles: { color: 'black', fontSize: 48 },
  feels: { color: 'black', fontSize: 30 },
  highLowWrapper: { flexDirection: 'row' },
  highLow: { color: 'black', fontSize: 20 },
})

export default CurrentWeather
