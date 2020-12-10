
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground
} from 'react-native'

import { useFonts } from 'expo-font'
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat'

import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'

import Generator from './src/components/Generator'

export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LinearGradient style={styles.gradient}
        colors={['#edf3fb', '#5ea156']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <View style={{ flexDirection: 'column', marginLeft: '10%' }}>
          <Image style={styles.img}
            source={require('./src/imgs/logo.png')} />
          <Text style={styles.title}>Palpitei</Text>
        </View>
        <Generator />
        <Text style={styles.footer}>Boa Sorte! :)</Text>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  gradient: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-around'
  },
  img: {
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').height / 10
  },
  title: {
    fontFamily: 'Montserrat_400Regular',
    left: '1.8%',
    color: '#5ea156',
    fontSize: 20
  },
  footer: {
    fontFamily: 'Montserrat_400Regular',
    color: '#188038',
    textAlign: 'right',
    right: '10%',
    fontSize: 20
 }
})
