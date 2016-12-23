import React, { Component, Proptypes } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles/styles';
import ToolbarContainer from '../containers/ToolbarContainer';


const HomeView = ({logout, children, addChild, nav}) => (
  <View>
    <ToolbarContainer nav={nav}/>
    <TouchableHighlight onPress={logout}>
      <Text>LOGOFF</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={addChild}>
      <Text>ADD CHILD</Text>
    </TouchableHighlight>
  </View>
);

// HomeView.PropTypes = {
//   logout: Proptypes.func.isRequired,
//   children: Proptypes.array,
//   addChild: Proptypes.func.isRequired
// };

export default HomeView;
