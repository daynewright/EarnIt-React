
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, Alert, Image } from 'react-native';
import styles from '../styles/styles';

class LoginForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      email: '',
      password: '',
      response: ''
    };

    this.loginUser = function() {
      fetch('http://138.197.44.210/account/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        })
      })
    .then(response => response.json())
        .then((responseJson) => {
          this.setState({ email: '', password: '', response: responseJson[Object.keys(responseJson)[0]]});

          if (Object.keys(responseJson)[0] === 'failure' || Object.keys(responseJson)[0] ===  'invalid') {
            Alert.alert(
              Object.keys(responseJson)[0].toUpperCase(),
              this.state.response,
              [{text: 'OK', onPress: () => console.log('OK Pressed!')},]
            );
          }
          else {
            this.props.nav.push({name: 'HOME'});
          }
          return null;
        })
        .catch((error) => {
          console.error(error);
        });
    };

    this.back = function() {
      this.props.nav.pop({name: 'LOGIN'});
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
          ref= "email"
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}/>
        <TouchableHighlight style={styles.button} onPress={this.loginUser.bind(this)}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.button, styles.cancelButton]} onPress={this.back.bind(this)}>
          <Text style={styles.buttonText}> {'<'} GO BACK</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = LoginForm;
