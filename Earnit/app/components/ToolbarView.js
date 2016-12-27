import React, { PropTypes } from 'react';
import { View, ToolbarAndroid, StyleSheet } from 'react-native';

const ToolbarView = ({ onActionSelected }) => (
  <View>
    <ToolbarAndroid
      logo={require('../images/logo.png')}
      style={styles.toolbar}
      actions={[{title: 'ADD CHILD', show: 'always'}, {title: 'LOG OFF', show: 'always'}]}
      onActionSelected={onActionSelected}
    />
  </View>
);

var styles = StyleSheet.create({
  toolbar: {
    height: 50,
    backgroundColor: '#11aac1',
  },
});

ToolbarView.PropTypes = {
  onActionSelected: PropTypes.func.isRequired
};

export default ToolbarView;
