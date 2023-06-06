import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  View
} from 'react-native'
import moment from 'moment'
import { weatherType } from '../utils/weatherType'
import IconText from '../components/IconText'

const CityInfo = ({ weatherData, weather }) => {
  const weatherCondition = weather.weather[0].main
  const { name, country, population, sunrise, sunset } = weatherData
  const {
    container,
    imageLayout,
    cityText,
    cityName,
    countryName,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    cityInfoWrapper
  } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={weatherType[weatherCondition].imageSource}
        style={imageLayout}
      >
        <View style={cityInfoWrapper}>
          <Text style={[cityText, cityName]}>{name}</Text>
          <Text style={[cityText, countryName]}>{country}</Text>
          <View style={populationWrapper}>
            <IconText
              iconName={'user'}
              iconColor={'red'}
              bodyText={`Population: ${population}`}
              bodyTextStyles={populationText}
            />
          </View>
        </View>
        <View style={riseSetWrapper}>
          <IconText
            iconName={'sunrise'}
            iconColor={'black'}
            bodyText={moment(sunrise).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'black'}
            bodyText={moment(sunset).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageLayout: { flex: 1 },
  cityInfoWrapper: {
    paddingVertical: 30,
    backgroundColor: 'rgba(255,255,255,0.4)',
    margin: 30,
    borderWidth: 1,
    borderRadius: 10
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  populationWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red'
  },
  riseSetWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
    backgroundColor:'rgba(255,255,255,0.4)',
    paddingVertical:10,
    borderRadius:10,
    borderWidth:1,
    marginHorizontal: 10
  },
  riseSetText: { fontSize: 20, color: 'black' }
})

export default CityInfo
