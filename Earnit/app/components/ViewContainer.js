
import React, { Component } from 'react';
import { View, TouchableHighlight, Text, TextInput } from 'react-native';
import styles from './styles/styles';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
import UserView from './UserView';

class ViewContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { user: ' ' };

    this.hitAPIwithAsync = function() {
      return fetch('http://138.197.44.210/account/getuser')
        .then(response => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          let user = responseJson.user ? responseJson.user.name : responseJson.error;
          this.setState({ user : user });
        })
        .catch((error) => {
          console.error(error);
        });
    };

    this.loggOff = function() {
      fetch('http://138.197.44.210/account/logoff', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
    .then(response => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          this.setState({ user: responseJson.loggedOut});
        })
        .catch((error) => {
          console.error(error);
        });
    };
  }

  render() {
    return  (
        <View style={{flex: 1}}>
          <LoginForm />
          {/* <RegisterForm /> */}
          {/* <TouchableHighlight style={styles.button} onPress={this.hitAPIwithAsync.bind(this)}>
            <Text style={styles.buttonText}>GET USER</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.button, styles.cancel]} onPress={this.loggOff.bind(this)}>
            <Text style={styles.buttonText}>LOG OFF</Text>
          </TouchableHighlight>
          <UserView user={this.state.user}/> */}
        </View>
    );
  }
}

module.exports = ViewContainer;
