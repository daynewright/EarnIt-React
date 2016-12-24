
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import styles from '../components/styles/styles';
import LoginForm from '../components/forms/LoginForm';
import * as actionCreators from '../actions/actionCreators';
import Spinner from 'react-native-loading-spinner-overlay';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loading: false,
      loggedin: false,
      failed: false
    };

    this._attemptLogin = this._attemptLogin.bind(this);
    this.back = this.back.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this);
    this.dismissKeyboard = require('dismissKeyboard');
  }

  _attemptLogin() {
    this.props.loginUser(this.state);
  }

  handleOnChangePassword(text) {
    this.setState({
      password: text
    });
    if (this.props.failed) {
      this.props.resetLogin(this.state);
    }
  }

  handleOnChangeEmail(text) {
    this.setState({
      email: text
    });
    if (this.props.failed) {
      this.props.resetLogin(this.state);
    }
  }

  handleOnClick() {
    this.dismissKeyboard();
    if (this.state.email === '' || !this.state.password === '') {
      Alert.alert('ERROR', 'Email and password required');
    }
    else {
      this._attemptLogin();
    }
  };

  back() {
    this.dismissKeyboard();
    this.props.nav.pop({name: 'LOGIN'});
  }

  render() {
    const { loading, loggedin, error, failed } = this.props;

    if (failed) {
      Alert.alert(Object.keys(error)[0].toUpperCase(), error[Object.keys(error)[0]]);
    }

    if (loggedin) {
      this.props.getChildren();
      this.props.nav.push({name: 'HOME'});
    }

    return (
      <View>
        <Spinner visible={loading} />
        <LoginForm
          back={this.back}
          onSubmit={this.handleOnClick}
          onChangePassword={this.handleOnChangePassword}
          onChangeEmail={this.handleOnChangeEmail}
        />
      </View>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    loading: state.user.loading,
    loggedin: state.user.loggedin,
    error: state.user.error,
    failed: state.user.failed
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
