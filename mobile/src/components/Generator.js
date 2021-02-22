import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native'

export default function Generator() {

  const [qtde, setQtde] = useState(6)
  const numerosIniciais = gerarNumeros(qtde)
  const [numeros, setNumeros] = useState(numerosIniciais)

  function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
    return array.includes(aleatorio)
      ? gerarNumeroNaoContido(min, max, array)
      : aleatorio
  }

  function gerarNumeros(qtde) {
    if (qtde >= 6 && qtde <= 15) {
      const numeros = Array(qtde)
        .fill(0)
        .reduce((nums) => {
          const novoNumero = gerarNumeroNaoContido(1, 60, nums)
          return [...nums, novoNumero]
        }, [])
        .sort((n1, n2) => n1 - n2)

      return numeros
    }
  }

  function onClickGerarNumeros() {
    if (qtde >= 6 && qtde <= 15) {
      setNumeros(gerarNumeros(qtde))
    } else Alert.alert(
      'Erro!',
      'Gere quantidade de números maiores do que 5 e menores do que 16.'
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aqui estão seus números da sorte!</Text>
      <View style={styles.sortView}>
        <Text style={styles.sort}>{numeros.join(' ')}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.textQtde}>Quantidade de Números</Text>
        <TextInput style={styles.input}
          placeholder='6'
          keyboardType='numeric'
          onChangeText={text => setQtde(parseInt(text))} />
      </View>
      <TouchableOpacity style={styles.button}
        onPress={() => onClickGerarNumeros()}>
        <Text style={styles.textButton}>Gerar Números</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    top: '5%'
  },
  title: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'montserratMedium'
  },
  sortView: {
    textAlign: 'center',
    margin: '3%'
  },
  sort: {
    color: '#FFF',
    backgroundColor: '#188038',
    fontSize: 30,
    paddingHorizontal: '5%',
    borderRadius: 8,
    fontFamily: 'montserratLight'
  },
  textQtde: {
    color: '#FFF',
    fontSize: 20,
    marginRight: '2%',
    fontFamily: 'montserratThin'
  },
  input: {
    color: '#FFF',
    backgroundColor: '#5ea156',
    fontSize: 20,
    width: '8%',
    borderRadius: 8,
    fontFamily: 'montserratLight'
  },
  button: {
    backgroundColor: '#5ea156',
    borderRadius: 8,
    padding: '3%',
    marginTop: '3%'
  },
  textButton: {
    color: '#FFF',
    fontFamily: 'montserratLight'
  }
})