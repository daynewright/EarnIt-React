import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import styles from '../components/styles/styles';
import HomeView from '../components/HomeView';
import * as actionCreators from '../actions/actionCreators';
import Spinner from 'react-native-loading-spinner-overlay';

class ViewChildContainer extends Component {

  render() {
    return (
        <View>
          <Text>TESTING THIS VIEW</Text>
        </View>
    );
  }

}

export default ViewChildContainer;
