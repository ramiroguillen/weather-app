import { imageList } from "./imageList"
export const weatherType = {
  Clear: {
    icon: 'sun',
    imageSource: imageList.sun
  },
  Clouds: {
    icon: 'cloud',
    imageSource: imageList.clouds
  },
  Drizzle: {
    icon: 'cloud-rain',
    imageSource: imageList.drizzle
  },
  Haze: {
    icon: 'wind',
    imageSource: imageList.haze
  },
  Mist: {
    icon: 'align-justify',
    imageSource: imageList.mist
  },
  Rain: {
    icon: 'umbrella',
    imageSource: imageList.rain
  },
  Snow: {
    icon: 'cloud-snow',
    imageSource: imageList.snow
  },
  Thunderstorm: {
    icon: 'zap',
    imageSource: imageList.thunderstorm
  }
}
