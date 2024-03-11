// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Open up App.js to start working on your app!</Text>
//       <Text style={{fontSize: 35,}}>inline</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize: 28,
//   }
// });

import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Location from "expo-location"
import { Ionicons } from '@expo/vector-icons'

const {height, width: SCREEN_WIDTH} = Dimensions.get("window");

const API_KEY = "cf0f79c21bcf87815b0634ed985e8c04"

// 가져온 데이터의 날씨 명에 따라 맞는 아이콘의 이름을 연결한 데이터 만듬
const icons = {
  "Clouds": "cloudy",
  "Clear": "day-sunny",
  "Atmos": "cloudy_gust",
  "Snow": "snow",
  "Rain": "rain",
  "Thunderstorm": "lighting",

}

export default function App() {
  const [city, setCity] = useState("loading");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const getWeather = async() => {
    const {granted} = await Location.requestForegroundPermissionsAsync();
    if (!granted){
      setOk(false);
    }
    const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy:5})
    const location = await Location.reverseGeocodeAsync(
      {latitude, longitude},
      {useGoogleMaps: false}
      )
    setCity(location[0].city)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`)
    const json = await response.json()
    console.log(json.days)
  }
  useEffect(() => {
    getWeather();
  }, [])
  return (
        // 부모 Flex 먼저 만들기
    <View style={styles.container}>
      <StatusBar style='light'></StatusBar>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={styles.weather}>
        {days.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator color='white' size='large'
            style={{marginTop: 10}}></ActivityIndicator>
          </View>
        ) : (
          days.map((day, index) =>
          <View key={index} style={styles.day}>
            <View style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
          }}>
              <Text style={styles.temp}>{ parseFloat(day.main.temp).toFixed(1) }</Text>
              <Fontisto name={icons[day.weather[0].main]} size={68} color="white"/> 
            </View>
            <Text style={styles.descripstion}>{ day.weather[0].main }</Text>
            <Text style={styles.tinyText}>{ day.weather[0].description }</Text>
          </View>
          )
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  city: {
    flex: 1.2,
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500",
  },
  weather: {
    // backgroundColor: "teal",
  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    fontSize: 178,
    marginTop: 50,
    fontWeight: "500",

  },
  description: {
    marginTop: -30,
    fontSize: 60,
  },
  tinyText: {
    fontSize: 20,
  }
})