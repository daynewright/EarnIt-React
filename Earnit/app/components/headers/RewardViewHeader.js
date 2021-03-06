import React from 'react';
import styles from '../styles/styles';
import { View, TouchableOpacity, Text } from 'react-native';

const Header = ({back, logOff}) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.buttonBack} onPress={back}>
      <Text style={styles.smButtonText}>{'< BACK'}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonBack} onPress={logOff}>
      <Text style={styles.smButtonText}>LOG OFF</Text>
    </TouchableOpacity>
  </View>
);


export default Header;
