
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../components/styles/styles';
import LoginForm from '../components/forms/LoginForm';
import * as actionCreators from '../actions/actionCreators';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this._attemptLogin = this._attemptLogin.bind(this);
    this.back = this.back.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this);

  }

  _attemptLogin() {
    Promise.resolve(this.props.loginUser(this.state))
      .then(() => {
        this.props.nav.push({name: 'MAIN'});
      });
  }

  handleOnChangePassword(text) {
    this.setState({
      password: text
    });
  }

  handleOnChangeEmail(text) {
    this.setState({
      email: text
    });
  }

  handleOnClick() {
    this._attemptLogin();
  };

  back() {
    this.props.nav.pop({name: 'LOGIN'});
  }

  render() {
    return (
      <LoginForm
        back={this.back}
        onSubmit={this.handleOnClick}
        onChangePassword={this.handleOnChangePassword}
        onChangeEmail={this.handleOnChangeEmail}
        email={this.props.email}
        password={this.props.password}
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
