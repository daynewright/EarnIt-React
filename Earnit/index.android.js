
import React, { Component } from 'react';
import { AppRegistry, Text, View, Navigator, TouchableHighlight } from 'react-native';
import styles from './app/components/styles/styles';
import LoginForm from './app/components/forms/LoginForm';
import RegisterForm from './app/components/forms/RegisterForm';

export default class Earnit extends Component {
  constructor(props, context) {
    super(props, context);

    this.goToLogin = function() {
      this.nav.push({name: 'LOGIN'});
    };

    this.goToRegister = function() {
      this.nav.push({name: 'REGISTER'});
    };
  }

  renderScene(route, nav) {
    switch (route.name) {
    case 'LOGIN':
      return (
        <View>
          <LoginForm nav={nav} />
        </View>
      );
    case 'REGISTER':
      return (
        <View>
          <RegisterForm nav={nav} />
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

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  render() {
    return (
      <Navigator
        configureScene={this.configureScene}
        initialRoute={{ name: 'START', index: 0 }}
        ref={((nav) => this.nav = nav)}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }

}



AppRegistry.registerComponent('Earnit', () => Earnit);
