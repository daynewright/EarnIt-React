import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../components/styles/styles';
import AddChildForm from '../components/forms/AddChildForm';
import * as actionCreators from '../actions/actionCreators';

class AddChildContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: ''
    };
    this.back = this.back.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnChangeName = this.handleOnChangeName.bind(this);
    this.handleOnChangeAge = this.handleOnChangeAge.bind(this);
    this.dismissKeyboard = require('dismissKeyboard');
  }

  handleOnChangeAge(text) {
    this.setState({
      age: text
    });
  }

  handleOnChangeName(text) {
    this.setState({
      name: text
    });
  }

  back() {
    this.dismissKeyboard();
    this.props.nav.pop({name: 'ADD_CHILD'});
  }

  handleOnClick() {
    this.dismissKeyboard();
    this.props.createChild(this.state);
  }

  render() {
    return (
      <AddChildForm
        back={this.back}
        onSubmit={this.handleOnClick}
        onChangeName={this.handleOnChangeName}
        onChangeAge={this.handleOnChangeAge}
        />
    );
  }
}

const mapStateToProps = function(state) {
  return {
    child: state.child
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddChildContainer);
