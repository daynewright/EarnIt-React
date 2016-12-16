import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class UserView extends Component {

  render() {
    return (
      <View>
        <Text style={style.user}>{this.props.user}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  user: {
    marginTop: 100,
    color: 'red'
  }
});

module.exports = UserView;
