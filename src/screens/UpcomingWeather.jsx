import React from 'react'
import {
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground
} from 'react-native'
import { weatherType } from '../utils/weatherType'
import ListItem from '../components/ListItem'

const UpcomingWeather = ({ weatherData }) => {
  const weatherCondition = weatherData[0].weather[0].main
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0]?.main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  const { container, image } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={weatherType[weatherCondition].imageSource}
        style={image}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1
  }
})

export default UpcomingWeather
