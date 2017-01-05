import React from 'react';
import styles from '../styles/styles';
import { View, TouchableOpacity, Text } from 'react-native';

const Header = ({back, addTask, earnedRewards, logOff}) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.buttonBack} onPress={back}>
      <Text style={styles.smButtonText}>{'< BACK'}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonPoint} onPress={addTask}>
      <Text style={styles.smButtonText}>ADD TASK</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonBack} onPress={logOff}>
      <Text style={styles.smButtonText}>LOG OFF</Text>
    </TouchableOpacity>
  </View>
);


export default Header;
