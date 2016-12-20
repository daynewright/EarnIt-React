
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../components/styles/styles';
import LoginForm from '../components/forms/LoginForm';
import * as actionCreators from '../actions/actionCreators';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this);

    this.state = {
      email: '',
      password: ''
    };
  }

  _attemptLogin() {
    console.log(this.state);
    this.props.loginUser(this.state);
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
    alert(JSON.stringify(this.state));
    // this._attemptLogin();
  };

  // loginUser() {
  //   fetch('http://138.197.44.210/account/login', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email: this.state.email,
  //       password: this.state.password,
  //     })
  //   })
  // .then(response => response.json())
  //     .then((responseJson) => {
  //       this.setState({ email: '', password: '', response: responseJson[Object.keys(responseJson)[0]]});
  //
  //       if (Object.keys(responseJson)[0] === 'failure' || Object.keys(responseJson)[0] ===  'invalid') {
  //         Alert.alert(
  //           Object.keys(responseJson)[0].toUpperCase(),
  //           this.state.response,
  //           [{text: 'OK', onPress: () => console.log('OK Pressed!')},]
  //         );
  //       }
  //       else {
  //         this.props.nav.push({name: 'HOME'});
  //       }
  //       return null;
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

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
        />
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(null, mapDispatchToProps)(LoginContainer);
