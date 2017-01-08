import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text, TouchableHighlight, Alert } from 'react-native';
import { bindActionCreators } from 'redux';
import styles from '../components/styles/styles';
import * as actionCreators from '../actions/actionCreators';
import Header from './headers/RewardViewHeader';
import Swipeout from 'react-native-swipeout';

const RewardView = ({ back, logOff, reward }) => (
  <View>
    <Header back={back} logOff={logOff}/>
    <View>
      <Text style={styles.text}>NAME: {reward.name}</Text>
      <Text style={styles.text}>DESCRIPTION: {reward.description}</Text>
      <Text style={styles.text}>POINTS NEEDED: {reward.pointsNeeded}</Text>
    </View>
  </View>
);

export default RewardView;
