
import React, { Component } from 'react';
import { AppRegistry, Text, View, Navigator, TouchableHighlight, Image } from 'react-native';
import styles from './app/components/styles/styles';
import LoginForm from './app/components/forms/LoginForm';
import RegisterForm from './app/components/forms/RegisterForm';
import UserView from './app/components/UserView';

export default class Earnit extends Component {
  constructor(props, context) {
    super(props, context);

    this.goToLogin = this.goToLogin.bind(this);
    this.goToRegister = this.goToRegister.bind(this);
  }

  goToLogin() {
    this.nav.push({name: 'LOGIN'});
  }

  goToRegister() {
    this.nav.push({name: 'REGISTER'});
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
    case 'HOME':
      return (
        <View>
          <UserView nav={nav} />
        </View>
      );
    default:
      return (
        <View style={{flex: 1, paddingTop: 100}}>
         <Image
            style={{width: 300, height: 100, alignSelf: 'center'}}
            source={require('./app/images/earnit-01.png')}/>
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
