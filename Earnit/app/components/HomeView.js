import React, { Component , PropTypes} from 'react';
import { View, TouchableOpacity, Text, ListView, Image } from 'react-native';
import styles from './styles/styles';
import Swipeout from 'react-native-swipeout';
import Header from './ListViewHeader';

class HomeView extends Component {
  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(child) {

    const { viewChild, removeChild } = this.props;
    const swipeoutBtnsRight = [
      {
        text: 'View Child',
        backgroundColor: '#75be79',
        onPress: () => { viewChild(child.childId) }
      }
    ];
    const swipeoutBtnsLeft = [
      {
        text: 'Delete',
        backgroundColor: '#d13b2e',
        onPress: () => { removeChild(child.childId) }
      }
    ];

    return (
      <Swipeout
        right={swipeoutBtnsRight}
        left={swipeoutBtnsLeft}
        >
          <View style={{flex: 1, backgroundColor: '#fff', paddingLeft: 5, paddingBottom: 10, paddingTop: 10}}>
            <TouchableOpacity onPress={() => viewChild(child.childId)}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.photo}
                  source={require('../images/kid.png')}
                />
                <View style={{flexDirection: 'column'}}>
                  <Text style={styles.text}>{child.name}</Text>
                  <Text style={{marginLeft: 12}}>Age: {child.age}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
      </Swipeout>
    );
  }

  render() {

    const { dataSource, viewChild } = this.props;

    return (
      <View>
        <ListView
          dataSource={dataSource}
          renderRow={this.renderRow}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          renderHeader={() => <Header />}
          />
      </View>
    );
  };
}

HomeView.PropTypes = {
  nav: PropTypes.array.isRequired,
  dataSource: PropTypes.array.isRequired
};

export default HomeView;
