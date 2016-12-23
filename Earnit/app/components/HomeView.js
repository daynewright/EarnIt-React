import React, { Component, Proptypes } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles/styles';
import ToolbarContainer from '../containers/ToolbarContainer';


const HomeView = ({ children, addChild, nav}) => (
  <View>
    <ToolbarContainer nav={nav}/>
    <Text> Just some test text</Text>
  </View>
);

// HomeView.PropTypes = {
//   logout: Proptypes.func.isRequired,
//   children: Proptypes.array,
//   addChild: Proptypes.func.isRequired
// };

export default HomeView;
