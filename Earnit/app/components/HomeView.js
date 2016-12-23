import React, { Proptypes } from 'react';
import { View, TouchableHighlight, Text, ListView } from 'react-native';
import styles from './styles/styles';
import ToolbarContainer from '../containers/ToolbarContainer';


const HomeView = ({children, nav, DataSource}) => (
  <View>
    <ToolbarContainer nav={nav}/>
    <ListView
      dataSource={DataSource}
      renderRow={(rowData)=> <Text>{rowData.name}</Text>}
      />
  </View>
);

// HomeView.PropTypes = {
//   children: Proptypes.array.isRequired,
//   nav: PropTypes.array.isRequired
// };

export default HomeView;
