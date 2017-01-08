import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text, TouchableHighlight, Alert } from 'react-native';
import { bindActionCreators } from 'redux';
import styles from '../components/styles/styles';
import HomeView from '../components/HomeView';
import * as actionCreators from '../actions/actionCreators';
import Spinner from 'react-native-loading-spinner-overlay';
import Header from './headers/TaskViewHeader';
import Swipeout from 'react-native-swipeout';


class TaskView extends Component {
  constructor(props) {
    super(props);

    //this.addPoint = this.addPoint.bind(this);
    this.addReward = this.addReward.bind(this);
    this.viewReward = this.viewReward.bind(this);
    this.earnedRewards = this.earnedRewards.bind(this);
    this.back = this.back.bind(this);
    this.logOff = this.logOff.bind(this);
    this.addTask = this.addTask.bind(this);
    this.renderRow = this.renderRow.bind(this);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.events.eventsArray),
    };
  }

  logOff() {
    console.log('logoff');
  };

  earnedRewards() {
    // redirect to earnedRewards view
  }

  back() {
    this.props.nav.resetTo({name: 'HOME'});
  }

  addTask() {
    this.props.nav.push({ name: 'ADD_TASK'});
  }

  addReward(event) {
    this.props.setEvent(event);
    this.props.nav.push({ name: 'ADD_REWARD'});
  }

  viewReward(event) {
    this.props.setEvent(event);
    this.props.nav.push({ name: 'VIEW_REWARD'});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ dataSource: this.state.dataSource.cloneWithRows(nextProps.events.eventsArray) });
    }
  }

  renderRow(event) {
    const { addReward, viewReward } = this;

    const swipeoutAddBtnsRight = [
      {
        text: '+ Reward',
        backgroundColor: '#fabd3a',
        onPress: () => { addReward(event) }
      }
    ];
    const swipeoutViewBtnsRight = [
      {
        text: '+ Point',
        backgroundColor: '#75be79',
        onPress: () => { addPoint(event) }
      },
      {
        text: 'View Reward',
        backgroundColor: '#61afef',
        onPress: () => { viewReward(event) }
      }
    ];
    const swipeoutBtnsLeft = [
      {
        text: 'Delete',
        backgroundColor: '#d13b2e',
        onPress: () => { viewReward(event.eventId) }
      }
    ];

    return (
      <Swipeout
        right={event.rewardId ? swipeoutViewBtnsRight : swipeoutAddBtnsRight }
        left={swipeoutBtnsLeft}
        >
          <View style={{flex: 1, backgroundColor: '#fff', paddingLeft: 15, paddingBottom: 10, paddingTop: 10}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={{fontSize: 20, fontWeight: '900'}}>{event.name}</Text>
                    <Text style={{fontStyle: 'italic'}}>{event.description}</Text>
                    <Text style={{fontWeight: '600'}}>{event.rewardId ? `0/${event.reward.pointsNeeded} pts` : '(slide to add reward)'}</Text>
                </View>
              </View>
          </View>
      </Swipeout>
    );
  }

  render() {
    const { loading, events } = this.props;

    return (
      <View>
      <Spinner visible={loading} />
      {events.error || !events.eventsArray.length ?
        <View>
          <Header addTask={this.addTask} earnedRewards={this.earnedRewards} back={this.back} logOff={this.logOff}/>
          <Text style={{textAlign: 'center'}}>(No current tasks for this child.)</Text>
        </View> :
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          renderHeader={() => <Header addTask={this.addTask} earnedRewards={this.earnedRewards} back={this.back} logOff={this.logOff}/>}
        />
      }
      </View>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    events: state.events,
    loading: state.events.loading,
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TaskView);
