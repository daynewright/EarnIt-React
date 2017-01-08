import React, { Component , PropTypes} from 'react';
import { View, TouchableOpacity, Text, ListView, Image } from 'react-native';
import styles from './styles/styles';
import Swipeout from 'react-native-swipeout';
import Header from './headers/ChildViewHeader';

class HomeView extends Component {
  constructor(props) {
    super(props);

    this.addChild = this.addChild.bind(this);
    this.logOff = this.logOff.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  addChild() {
    this.props.nav.push({name: 'ADD_CHILD'});
  }

  logOff() {
    this.props.nav.resetTo({name: ' '});
  }

  renderRow(child) {

    const { viewRewards, viewChild, deleteChild } = this.props;
    const swipeoutBtnsRight = [
      {
        text: 'Earned Rewards',
        backgroundColor: '#fabd3a',
        onPress: () => { viewRewards(child.childId) }
      },
      {
        text: 'Tasks',
        backgroundColor: '#75be79',
        onPress: () => { viewChild(child) }
      }
    ];
    const swipeoutBtnsLeft = [
      {
        text: 'Delete',
        backgroundColor: '#d13b2e',
        onPress: () => { deleteChild(child.childId) }
      }
    ];

    return (
      <Swipeout
        autoClose={true}
        right={swipeoutBtnsRight}
        left={swipeoutBtnsLeft}
        >
          <View style={{flex: 1, backgroundColor: '#fff', paddingLeft: 5, paddingBottom: 10, paddingTop: 10}}>
            <TouchableOpacity onPress={() => viewChild(child)}>
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

    const { dataSource, viewChild, children } = this.props;

    return (
      <View>
        {(children.error || !children.childArray.length) ?
          <View>
            <Header addChild={this.addChild} logOff={this.logOff}/>
            <Text style={{textAlign: 'center'}}>(Currently no children added.)</Text>
          </View> :
          <ListView
            dataSource={dataSource}
            renderRow={this.renderRow}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            renderHeader={() => <Header addChild={this.addChild} logOff={this.logOff}/>}
          />
        }
      </View>
    );
  };
}

HomeView.PropTypes = {
  nav: PropTypes.array.isRequired,
  dataSource: PropTypes.array.isRequired
};

export default HomeView;
