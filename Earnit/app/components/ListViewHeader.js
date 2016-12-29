import React from 'react';
import styles from './styles/styles';
import { View, TouchableOpacity, Text } from 'react-native';

const Header = (props) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.buttonPoint} Press={props.addChild}>
      <Text style={styles.smButtonText}>ADD CHILD</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.buttonBack]} onPress={props.back}>
      <Text style={styles.smButtonText}>LOG OFF</Text>
    </TouchableOpacity>
  </View>
);

export default Header;
