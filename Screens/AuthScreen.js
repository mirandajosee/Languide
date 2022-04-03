import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet,Image } from 'react-native';
import StyleConstants from '../Constants/StyleConstants';
import { signUp,signIn } from '../store/actions/auth.action';
import FormInput from '../Components/FormInput';

function AuthScreen() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    dispatch(signIn(email, password));
  }

  const handleSignUp = () => {
    dispatch(signUp(email, password));
  }

  const title = 'REGISTRO',
    message = '¿Ya tienes cuenta?',
    messageAction = 'Ingresar',
    messageTarget = 'login';

  const handleInputChange = (id, value, isValid) => {
    if (id === 'email') setEmail(value)
    if (id === 'password') setPassword(value)
  }

  return (
    <View style={styles.screen}>
      <Image source={require('../assets/applogo.png')} style={styles.image}/>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FormInput
          label="E-mail"
          id = 'email'
          onInputChange={handleInputChange}
          keyboardType="email-address"
          autoCapitalize="none"
          required
          placeholder='Ingresa tu correo electrónico'
        />
        <FormInput
          label="Clave"
          id = 'password'
          onInputChange={handleInputChange}
          secureTextEntry
          required
          placeholder='Ingresa tu contraseña'
        />
        <Button
          title="REGISTRARSE"
          color={StyleConstants.mainColor}
          onPress={handleSignUp}
        /> 
        <View style={styles.prompt}>
          <Text style={styles.promptMessage}>{message}</Text>
          <TouchableOpacity onPress={handleSignIn}>
            <Text style={styles.promptButton}>{messageAction}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:StyleConstants.terciaryColor
  },
  image: {
    width:190,
    height:120
  },
  title: {
    fontSize: StyleConstants.titleFontSize,
    marginBottom: 18,
    textAlign: 'center',
    fontFamily:StyleConstants.mainFont
  },
  container: {
    width: '80%',
    maxWidth: 400,
    padding: 12,
    margin: 12,
    borderColor: StyleConstants.mainColor,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  prompt: {
    alignItems: 'center',
  },
  promptMessage: {
    fontSize: 16,
    color: '#333',
  },
  promptButton: {
    fontSize: 16,
    color: StyleConstants.mainColor,
  },
});

export default AuthScreen;