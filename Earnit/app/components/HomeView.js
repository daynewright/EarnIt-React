import React, { PropTypes } from 'react';
import { View, TouchableHighlight, Text, ListView } from 'react-native';
import styles from './styles/styles';
import ToolbarContainer from '../containers/ToolbarContainer';


const HomeView = ({ nav, dataSource }) => (
  <View>
    <ToolbarContainer nav={nav}/>
    <ListView
      dataSource={dataSource}
      renderRow={(rowData)=> <Text>{rowData}</Text>}
      />
  </View>
);

HomeView.PropTypes = {
  nav: PropTypes.array.isRequired,
  dataSource: PropTypes.array.isRequired
};

export default HomeView;
