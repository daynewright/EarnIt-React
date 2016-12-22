import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../components/styles/styles';
import LoginForm from '../components/forms/LoginForm';
import * as actionCreators from '../actions/actionCreators';
import { View, Text } from 'react-native';

class MainContainer extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View>
        <Text>YOU ARE LOGGED IN! {this.props.user.email}</Text>
      </View>
    );
  }

}

const mapStateToProps = function(state) {
  return {
    user: state.user,
    children: state.children
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
