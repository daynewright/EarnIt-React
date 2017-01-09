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
      <Text style={[styles.center, styles.name]}> 🏆 {reward.name} 🏆</Text>
      <Text style={[styles.center, styles.description]}>{reward.description}</Text>
      <Text style={[styles.center, styles.points]}>{reward.pointsNeeded} points</Text>
    </View>
  </View>
);



export default RewardView;
