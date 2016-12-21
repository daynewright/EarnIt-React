import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, TouchableHighlight, Alert, Image } from 'react-native';
import styles from '../styles/styles';

  // RegisterUser() {
  //   fetch('http://138.197.44.210/account/register', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email: this.state.email,
  //       password: this.state.password,
  //       confirmpassword: this.state.confirmPassword
  //     })
  //   })
  // .then(response => response.json())
  //     .then((responseJson) => {
  //       console.log(responseJson);
  //       this.setState({ email: '', password: '', confirmPassword: '', response: responseJson[Object.keys(responseJson)[0]]});
  //       if (Object.keys(responseJson)[0] === 'failure' || Object.keys(responseJson)[0] === 'invalid' || Object.keys(responseJson)[0] === 'error') {
  //         Alert.alert(
  //           Object.keys(responseJson)[0].toUpperCase(),
  //           this.state.response,
  //           [{text: 'OK', onPress: () => console.log('OK Pressed!')},]
  //         );
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

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

module.exports = RegisterForm;
