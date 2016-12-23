import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert } from 'react-native';
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
    this._emailValid = this._emailValid.bind(this);
    this._attemptRegistration = this._attemptRegistration.bind(this);
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this);
    this.handleOnChangeConfirmPassword = this.handleOnChangeConfirmPassword.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.back = this.back.bind(this);
    this.dismissKeyboard = require('dismissKeyboard');
  }

  _emailValid()  {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email);
  }

  _attemptRegistration() {
    if (this._emailValid()) {
      console.log(this.state);
      Promise.resolve(this.props.registerUser(this.state))
        .then(() => {
          setTimeout(()=> {
            if (this.props.user.login) {
              this.props.nav.push({name: 'HOME'});
            }
            else {
              console.log('ERROR: ', this.props.user);
              const error = this.props.user.error.errors ? this.props.user.error.errors[0] : this.props.user.error;
              console.log('ERROR CONST: ', error);
              Alert.alert('ERROR', error[Object.keys(error)[0]]);
            }
          }, 2000);
        });
    }
    else {
      Alert.alert('ERROR', 'You must enter a valid email address');
    }
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
    this.dismissKeyboard();
    this._attemptRegistration();
  };

  back() {
    this.dismissKeyboard();
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

const mapStateToProps = function(state) {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
