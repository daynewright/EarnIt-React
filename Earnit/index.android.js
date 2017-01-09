
import './ReactotronConfig';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry, Text, View, Navigator, TouchableHighlight, Image } from 'react-native';
import styles from './app/components/styles/styles';
import LoginContainer from './app/containers/LoginContainer';
import RegisterContainer from './app/containers/RegisterContainer';
import HomeContainer from './app/containers/HomeContainer';
import AddChildContainer from './app/containers/AddChildContainer';
import AddTaskContainer from './app/containers/AddTaskContainer';
import AddRewardContainer from './app/containers/AddRewardContainer';
import RewardContainer from './app/containers/RewardContainer';
import TaskView from './app/components/TaskView';
import store from './app/store/configureStore';

export default class Earnit extends Component {
  constructor(props, context) {
    super(props, context);

    this.goToLogin = this.goToLogin.bind(this);
    this.goToRegister = this.goToRegister.bind(this);
    this.renderScene = this.renderScene.bind(this);
    this.configureScene = this.configureScene.bind(this);

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
          <LoginContainer nav={nav} />
        </View>
      );
    case 'REGISTER':
      return (
        <View>
          <RegisterContainer nav={nav} />
        </View>
      );
    case 'HOME':
      return (
        <View>
          <Image
             style={{width: 150, height: 50, alignSelf: 'center'}}
             source={require('./app/images/earnit-01.png')}/>
          <HomeContainer nav={nav}/>
        </View>
      );
    case 'ADD_CHILD':
      return (
        <View>
          <AddChildContainer nav={nav} />
        </View>
      );
    case 'VIEW_CHILD':
      return (
        <View>
          <Image
             style={{width: 150, height: 50, alignSelf: 'center'}}
             source={require('./app/images/earnit-01.png')}/>
          <TaskView nav={nav}/>
        </View>
      );
    case 'ADD_TASK':
      return (
        <View>
          <AddTaskContainer nav={nav} />
        </View>
      );
    case 'ADD_REWARD':
      return (
        <View>
          <AddRewardContainer nav={nav} />
        </View>
      );
    case 'VIEW_REWARD':
      return (
        <View>
          <Image
             style={{width: 150, height: 50, alignSelf: 'center'}}
             source={require('./app/images/earnit-01.png')}/>
          <RewardContainer nav={nav}/>
        </View>
      );
    default:
      return (
        <View style={{flex: 1, paddingTop: 100}}>
         <Image
            style={{width: 300, height: 100, alignSelf: 'center'}}
            source={require('./app/images/earnit-01.png')}/>
          <TouchableHighlight
            onPress={this.goToLogin}
            style={styles.button}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.goToRegister}
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
      <Provider store={store}>
        <Navigator
          configureScene={this.configureScene}
          initialRoute={{ name: 'START', index: 0 }}
          ref={((nav) => this.nav = nav)}
          renderScene={this.renderScene}
        />
    </Provider>
    );
  }

}

AppRegistry.registerComponent('Earnit', () => Earnit);
