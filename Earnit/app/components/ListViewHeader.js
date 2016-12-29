import React from 'react';
import styles from './styles/styles';
import { View, TouchableOpacity, Text } from 'react-native';

const Header = ({addChild, logOff}) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.buttonPoint} onPress={addChild}>
      <Text style={styles.smButtonText}>ADD CHILD</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.buttonBack]} onPress={logOff}>
      <Text style={styles.smButtonText}>LOG OFF</Text>
    </TouchableOpacity>
  </View>
);

export default Header;
