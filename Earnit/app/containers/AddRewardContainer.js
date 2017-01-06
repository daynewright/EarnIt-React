import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../components/styles/styles';
import AddRewardForm from '../components/forms/AddRewardForm';
import * as actionCreators from '../actions/actionCreators';

class AddRewardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      pointsNeeded: ''
    };
    this._attemptAddReward = this._attemptAddReward.bind(this);
    this.back = this.back.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnChangeName = this.handleOnChangeName.bind(this);
    this.handleOnChangeDescription = this.handleOnChangeDescription.bind(this);
    this.handleOnChangePointsNeeded = this.handleOnChangePointsNeeded.bind(this);
    this.dismissKeyboard = require('dismissKeyboard');
  }

  _attemptAddReward() {
    if (!this.state.name || !this.state.description || !this.state.pointsNeeded) {
      Alert.alert('ERROR', 'You need to fill out all fields for the reward.');
    }
    else {
      console.log(`*********** Need to add a reward for event id ${this.props.event.eventId}`);
      this.props.createReward({...this.state, eventId: this.props.event.eventId});
      this.props.nav.pop();
    }
  }

  handleOnChangeName(text) {
    this.setState({
      name: text
    });
  }

  handleOnChangeDescription(text) {
    this.setState({
      description: text
    });
  }

  handleOnChangePointsNeeded(text) {
    this.setState({
      pointsNeeded: text
    });
  }

  back() {
    this.dismissKeyboard();
    this.props.nav.resetTo({name: 'VIEW_CHILD'});
  }

  handleOnClick() {
    this._attemptAddReward();
  }

  render() {
    return (
      <AddRewardForm
        back={this.back}
        onSubmit={this.handleOnClick}
        onChangeName={this.handleOnChangeName}
        onChangeDescription={this.handleOnChangeDescription}
        onChangePointsNeeded={this.handleOnChangePointsNeeded}
        />
    );
  }
}

const mapStateToProps = function(state) {
  return {
    event: state.event,
    reward: state.reward
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddRewardContainer);
