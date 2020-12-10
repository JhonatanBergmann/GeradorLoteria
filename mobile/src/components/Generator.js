import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'

import { useFonts } from 'expo-font'
import { Montserrat_400Regular, Montserrat_100Thin } from '@expo-google-fonts/montserrat'

export default (props) => {

  function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
    return array.includes(aleatorio)
      ? gerarNumeroNaoContido(min, max, array)
      : aleatorio
  }

  function gerarNumeros(qtde) {
    const numeros = Array(qtde)
      .fill(0)
      .reduce((nums) => {
        const novoNumero = gerarNumeroNaoContido(1, 60, nums)
        return [...nums, novoNumero]
      }, [])
      .sort((n1, n2) => n1 - n2)

    return numeros
  }

  const [qtde, setQtde] = useState(props.qtde || 6)
  const numerosIniciais = gerarNumeros(qtde)
  const [numeros, setNumeros] = useState(numerosIniciais)

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_100Thin
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aqui estão seus números da sorte!</Text>
      <View style={styles.sortView}>
        <Text style={styles.sort}>{numeros.join(" ")}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.textQtde}>Quantidade de Números</Text>
        <TextInput style={styles.input}
          value={`${qtde}`}
          keyboardType='numeric'

          onChange={(e) => {
            setQtde(e.value)
            setNumeros(gerarNumeros(e.value))
          }}
        />
      </View>
      <TouchableOpacity style={styles.button}
        onPress={(_) => setNumeros(gerarNumeros(qtde))}>
        <Text style={styles.textButton}>Gerar Números</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Montserrat_400Regular',
    color: '#FFF',
    textAlign: 'center',
    fontSize: 25
  },
  sortView: {
    textAlign: 'center',
    margin: '3%'
  },
  sort: {
    fontFamily: 'Montserrat_400Regular',
    color: '#FFF',
    backgroundColor: '#188038',
    fontSize: 30,
    paddingHorizontal: '5%',
    borderRadius: 8
  },
  textQtde: {
    fontFamily: 'Montserrat_100Thin',
    color: '#FFF',
    fontSize: 20,
    marginRight: '2%'
  },
  input: {
    fontFamily: 'Montserrat_400Regular',
    color: '#FFF',
    backgroundColor: '#5ea156',
    fontSize: 20,
    width: '8%',
    borderRadius: 8
  },
  button: {
    backgroundColor: '#5ea156',
    borderRadius: 8,
    padding: '3%',
    marginTop: '3%'
  },
  textButton: {
    fontFamily: 'Montserrat_400Regular',
    color: '#FFF'
  }
})