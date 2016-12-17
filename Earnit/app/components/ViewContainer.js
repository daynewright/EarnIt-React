
import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
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
          <TouchableHighlight>
            <Text>LOGIN</Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text>REGISTER</Text>
          </TouchableHighlight>
        </View>
    );
  }
}

module.exports = ViewContainer;
