import React, { PropTypes } from 'react';
import { View, TouchableHighlight, Text, ListView } from 'react-native';
import styles from './styles/styles';

const HomeView = ({ dataSource, viewChild }) => (
  <View>
    <ListView
      dataSource={dataSource}
      renderRow={(child)=>  (
        <TouchableHighlight style={[styles.button, styles.childButton]} onPress={() => viewChild(child.childId)}>
          <Text style={styles.buttonText}>{child.name} {child.age}</Text>
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
