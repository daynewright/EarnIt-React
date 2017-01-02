import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../components/styles/styles';
import AddTaskForm from '../components/forms/AddTaskForm';
import * as actionCreators from '../actions/actionCreators';

class AddTaskContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      pointsNeeded: ''
    };
    this._attemptAddTask = this._attemptAddTask.bind(this);
    this.back = this.back.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnChangeTitle = this.handleOnChangeTitle.bind(this);
    this.handleOnChangeDescription = this.handleOnChangeDescription.bind(this);
    this.dismissKeyboard = require('dismissKeyboard');
  }

  _attemptAddReward() {
    // this.props.createReward(this.state);
    this.props.nav.push({name: 'ADD_REWARD'});
  }

  handleOnChangeTitle(text) {
    this.setState({
      title: text
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
    this._attemptAddTask();
  }

  render() {
    return (
      <AddRewardForm
        back={this.back}
        onSubmit={this.handleOnClick}
        onChangeName={this.handleOnChangeTitle}
        onChangeDescription={this.handleOnChangeDescription}
        />
    );
  }
}

const mapStateToProps = function(state) {
  return {
    event: state.task
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskContainer);
