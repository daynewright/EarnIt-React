
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import styles from '../styles/styles';

class LoginForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      email: '',
      password: '',
      response: 'TEST'
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
        })
        .catch((error) => {
          console.error(error);
        });
    };
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 25, color: 'black', textAlign: 'center'}}>LOGIN</Text>
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
        <Text>{this.state.response}</Text>
      </View>
    );
  }
}

module.exports = LoginForm;
