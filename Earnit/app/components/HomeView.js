import React, { PropTypes } from 'react';
import { View, TouchableHighlight, Text, ListView } from 'react-native';
import ToolbarContainer from '../containers/ToolbarContainer';
import styles from './styles/styles';

const HomeView = ({ nav, dataSource }) => (
  <View>
    <ToolbarContainer nav={nav}/>
    <ListView
      dataSource={dataSource}
      renderRow={(child)=>  (
        <TouchableHighlight style={[styles.button, styles.childButton]}>
          <Text key={child.childId} style={styles.buttonText}>{child.name} {child.age}</Text>
        </TouchableHighlight>
      )}
      />
  </View>
);

HomeView.PropTypes = {
  nav: PropTypes.array.isRequired,
  dataSource: PropTypes.array.isRequired
};

export default HomeView;
