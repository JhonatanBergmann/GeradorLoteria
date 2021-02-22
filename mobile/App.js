
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'

import { setStatusBarHidden } from 'expo-status-bar' /* EXPO STATUSBAR HIDDEN */
import { LinearGradient } from 'expo-linear-gradient'
import { AppLoading } from 'expo'
import { useFonts } from 'expo-font'

import Generator from './src/components/Generator'

export default function App() {

  const [loaded] = useFonts({
    montserratThin: require('./assets/fonts/Montserrat-Thin.ttf'),
    montserratLight: require('./assets/fonts/Montserrat-Light.ttf'),
    montserratMedium: require('./assets/fonts/Montserrat-Medium.ttf')
  })

  if (!loaded) {
    return <AppLoading />
  }

  setStatusBarHidden(true) /* EXPO STATUSBAR HIDDEN */

  return (
    <View style={styles.container}>
      <LinearGradient style={styles.gradient}
        colors={['#edf3fb', '#5ea156']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <View style={{ alignItems: 'center', position: 'absolute', left: '10%' }}>
            <Image style={styles.img}
              source={require('./src/imgs/logo.png')} />
            <Text style={styles.title}>Palpitei</Text>
          </View>
        </View>
        <Generator />
        <Text style={styles.footer}>Boa Sorte! :)</Text>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
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
    color: '#5ea156',
    fontSize: 20,
    fontFamily: 'montserratLight'
  },
  footer: {
    color: '#188038',
    textAlign: 'right',
    right: '10%',
    fontSize: 20,
    fontFamily: 'montserratLight'
  }
})