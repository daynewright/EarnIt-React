import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, TouchableHighlight, Alert, Image } from 'react-native';
import styles from '../styles/styles';

const RegisterForm = ({email, password, confirmPassword, onChangeEmail, onChangePassword, onChangeConfirmPassword, onSubmit, back}) => (
    <View>
      <Image
         style={{width: 300, height: 100, alignSelf: 'center'}}
         source={require('../../images/earnit-01.png')}/>
      <TextInput placeholder="Email" keyboardtype={'email-address'}
        onChangeText={onChangeEmail}
        />
      <TextInput placeholder="Password" secureTextEntry={true}
        onChangeText={onChangePassword}
        />
        <TextInput placeholder="Confirm Password" secureTextEntry={true}
          onChangeText={onChangeConfirmPassword}
        />
      <TouchableHighlight style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>REGISTER</Text>
      </TouchableHighlight>
      <TouchableHighlight style={[styles.button, styles.cancelButton]} onPress={back}>
        <Text style={styles.buttonText}> {'<'} GO BACK</Text>
      </TouchableHighlight>
    </View>
);

RegisterForm.PropTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onChangeConfirmPassword: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default RegisterForm;
