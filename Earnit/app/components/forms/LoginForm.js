import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, TouchableHighlight, Alert, Image } from 'react-native';
import styles from '../styles/styles';


const LoginForm = ({email, password, onSubmit, onChangePassword, onChangeEmail, back}) => (
        <View>
          <Image
             style={{width: 300, height: 100, alignSelf: 'center'}}
             source={require('../../images/earnit-01.png')}/>
             <TextInput placeholder="Email" keyboardtype={'email-address'}
               value={email}
               onChangeText={onChangeEmail}
               />
             <TextInput placeholder="Password" secureTextEntry={true}
               value={password}
               onChangeText={onChangePassword}
              />
             <TouchableHighlight style={styles.button} onPress={onSubmit}>
               <Text style={styles.buttonText}>LOGIN</Text>
             </TouchableHighlight>
             <TouchableHighlight style={[styles.button, styles.cancelButton]} onPress={back}>
               <Text style={styles.buttonText}> {'<'} GO BACK</Text>
             </TouchableHighlight>
        </View>
);

LoginForm.PropTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default LoginForm;
