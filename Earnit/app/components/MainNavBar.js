
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class MainNavBar extends Component {

  render() {
    return (
      <View style={styles.MainNavBar}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainNavBar: {
    height: 35,
    backgroundColor: 'grey'
  }
});

module.exports = MainNavBar;
