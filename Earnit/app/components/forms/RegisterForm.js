import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, Alert, Image } from 'react-native';
import styles from '../styles/styles';

class RegisterForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      response: ''
    };

    this.RegisterUser = function() {
      fetch('http://138.197.44.210/account/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          confirmpassword: this.state.confirmPassword
        })
      })
    .then(response => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          this.setState({ email: '', password: '', confirmPassword: '', response: responseJson[Object.keys(responseJson)[0]]});
          if (Object.keys(responseJson)[0] === 'failure' || Object.keys(responseJson)[0] === 'invalid' || Object.keys(responseJson)[0] === 'error') {
            Alert.alert(
              Object.keys(responseJson)[0].toUpperCase(),
              this.state.response,
              [{text: 'OK', onPress: () => console.log('OK Pressed!')},]
            );
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    this.back = function() {
      this.props.nav.pop({name: 'REGISTER'});
    };
  }

  render() {
    return (
      <View>
        <Image
           style={{width: 300, height: 100, alignSelf: 'center'}}
           source={require('../../images/earnit-01.png')}/>
        <TextInput placeholder="Email" keyboardtype={'email-address'}
          ref= "email"
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          />
        <TextInput placeholder="Password" secureTextEntry={true}
          ref= "password"
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}/>
          <TextInput placeholder="Confirm Password" secureTextEntry={true}
            ref= "confirmPassword"
            onChangeText={(confirmPassword) => this.setState({confirmPassword})}
            value={this.state.confirmPassword}/>
        <TouchableHighlight style={styles.button} onPress={this.RegisterUser.bind(this)}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.button, styles.cancelButton]} onPress={this.back.bind(this)}>
          <Text style={styles.buttonText}> {'<'} GO BACK</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = RegisterForm;
