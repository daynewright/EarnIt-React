import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class UserView extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: ''
    };

    this.getUser = function() {
      return fetch('http://138.197.44.210/account/getuser')
        .then(response => response.json())
        .then((responseJson) => {
          this.setState({ user: responseJson.user.name });
          //return responseJson.user.name;
        })
        .catch((error) => {
          console.error(error);
        })
        .then(() => {

        });
    };
  }

  render() {
    return (
      <View>
        <Text>This is the user: {this.state.user}</Text>
      </View>
    );
  }
}

module.exports = UserView;
