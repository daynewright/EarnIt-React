import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../components/styles/styles';
import RegisterForm from '../components/forms/RegisterForm';
import * as actionCreators from '../actions/actionCreators';

class RegisterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'email': '',
      'password': '',
      'confirmPassword': ''
    };

    this._attemptRegistration = this._attemptRegistration.bind(this);
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this);
    this.handleOnChangeConfirmPassword = this.handleOnChangeConfirmPassword.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.back = this.back.bind(this);
  }

  _attemptRegistration() {
    console.log(this.state);
    this.props.registerUser(this.state);
  }

  handleOnChangeEmail(text) {
    this.setState({
      email: text
    });
  }

  handleOnChangePassword(text) {
    this.setState({
      password: text
    });
  }
  handleOnChangeConfirmPassword(text) {
    this.setState({
      confirmPassword: text
    });
  }

  handleOnClick() {
    this._attemptRegistration();
  };

  back() {
    this.props.nav.pop({name: 'REGISTER'});
  }

  render() {
    return (
      <RegisterForm
        back={this.back}
        onSubmit={this.handleOnClick}
        onChangeEmail={this.handleOnChangeEmail}
        onChangePassword={this.handleOnChangePassword}
        onChangeConfirmPassword={this.handleOnChangeConfirmPassword}
      />
    );
  }

}


const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(null, mapDispatchToProps)(RegisterContainer);
