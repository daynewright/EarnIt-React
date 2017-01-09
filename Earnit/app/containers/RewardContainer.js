import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View } from 'react-native';
import { bindActionCreators } from 'redux';
import styles from '../components/styles/styles';
import RewardView from '../components/RewardView';
import * as actionCreators from '../actions/actionCreators';
import Spinner from 'react-native-loading-spinner-overlay';

class RewardContainer extends Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
  }

  back() {
    this.props.nav.pop();
  }

  logOff() {
    // run log off action
  }

  render() {
    const { back, logOff } = this;
    const { reward } = this.props;

    return (
      <RewardView reward={reward} back={back} logOff={logOff}/>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    reward: state.event.reward,
    event: state.event
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RewardContainer);
