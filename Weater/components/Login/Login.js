import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React from 'react';
import img from '../../assets/season.png';
import {NavigationContainer , useNavigation } from '@react-navigation/native';

export default function Login() {

  const navigation = useNavigation();
  return (
    <View  style={styles.container}
    behavior="padding"
    >
      <Image style={styles.imgWeatherDia} source={img}/>
    <View style={styles.inputContainer}>
    <Text style={styles.Titre}>Login</Text>
    <TextInput
     placeholder="Gmail"
      // value={email}
      // onChangeText={text => setEmail(text)}
      style={styles.input}
    />
    <TextInput
      placeholder="Password"
      // value={password}
      // onChangeText={text => setPassword(text)}
      style={styles.input}
      secureTextEntry
    />
  </View>

  <View style={styles.buttonContainer}>
    <TouchableOpacity
      // onPress={handleLogin}
      onPress={() => navigation.navigate('Weater')}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity
      // onPress={Register}
      style={[styles.button, styles.buttonOutline]}
      onPress={() => navigation.navigate('Register')}
    >
      <Text style={styles.buttonOutlineText}>Register</Text>
    </TouchableOpacity>
  </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    borderColor: 'black',

  },
  input: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: '30%',
    paddingVertical: 10,
    textAlign: 'center',
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    borderColor: 'black',
   
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',

    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    paddingHorizontal: '20%',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    paddingHorizontal: '18%',
    fontSize: 16,
  },
  imgWeatherDia:{
   
  },
    Titre:{
    color: '#0782F9',
    display: 'flex',
    fontWeight: '700',
    fontSize: 26,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

  }
})