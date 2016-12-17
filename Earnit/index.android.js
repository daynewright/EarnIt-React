
import React, { Component } from 'react';
import { AppRegistry, Text, View, Navigator, TouchableHighlight } from 'react-native';
import styles from './app/components/styles/styles';
import LoginForm from './app/components/forms/LoginForm';
import RegisterForm from './app/components/forms/RegisterForm';

export default class Earnit extends Component {
  constructor(props, context) {
    super(props, context);

    this.goToLogin = function() {
      return route.name = 'LOGIN';
    };

    this.goToRegister = function() {
      return route.name = 'REGISTER';
    };
  }

  getRememberHandler(id) {
    return (component) => {
      this[id] = component;
    };
  }

  renderScene(route, nav) {
    switch (route.name) {
    case 'LOGIN':
      return (
        <View>
          <LoginForm />
        </View>
      );
    case 'REGISTER':
      return (
        <View>
          <RegisterForm />
        </View>
      );
    default:
      return (
        <View>
          <TouchableHighlight
            onPress={this.goToLogin.bind(this)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.goToRegister.bind(this)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableHighlight>
        </View>
      );
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'START', index: 0 }}
        ref={((nav) => this.nav = nav)}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }

}



AppRegistry.registerComponent('Earnit', () => Earnit);
