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

    this.addPoint = this.addPoint.bind(this);
    this.addReward = this.addReward.bind(this);
    this.viewReward = this.viewReward.bind(this);
    this.back = this.back.bind(this);
    this.logOff = this.logOff.bind(this);
    this.addTask = this.addTask.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this._getPoints = this._getPoints.bind(this);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.events.eventsArray),
    };
  }

  addPoint(event) {
    this.props.createPoint(event.eventId);
  }

  logOff() {
    console.log('logoff');
  };

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
      if (nextProps.events.eventsArray.length > this.props.events.eventsArray.length) {
        this._getPoints(nextProps);
      }
    }
  }

  _getPoints(props) {
    props.events.eventsArray.forEach(e => this.props.getPoints(e.eventId));
  }


  renderRow(event) {
    const { addReward, viewReward, addPoint } = this;

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
        onPress: () => { console.log('Delete task') }
      }
    ];

    return (
      <Swipeout
        autoClose={true}
        right={event.rewardId ? swipeoutViewBtnsRight : swipeoutAddBtnsRight }
        left={swipeoutBtnsLeft}
        >
          <View style={{flex: 1, backgroundColor: '#fff', paddingLeft: 15, paddingBottom: 10, paddingTop: 10}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={{fontSize: 20, fontWeight: '900'}}>{event.name}</Text>
                    <Text style={{fontStyle: 'italic'}}>{event.description}</Text>
                    <Text style={{fontWeight: '600'}}> {event.rewardId ? event.earnedPoints >= event.reward.pointsNeeded ? '🌟 REWARD EARNED! 🌟' : `${event.earnedPoints}/${event.reward.pointsNeeded} pts` : '(slide to add reward)'} </Text>
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
      <Spinner visible={ loading } />
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
    loadingPoints: state.events.loadingPoints
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TaskView);
