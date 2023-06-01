import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  View
} from 'react-native'
import moment from 'moment'
import IconText from '../components/IconText'

const CityInfo = ({ weatherData }) => {
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
    riseSetText
  } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city.jpg')}
        style={imageLayout}
      >
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
        <View style={riseSetWrapper}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={moment(sunrise).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'white'}
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
    marginTop: 30
  },
  riseSetText: { fontSize: 20, color: 'white' }
})

export default CityInfo
