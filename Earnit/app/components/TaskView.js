import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text, TouchableHighlight, Alert } from 'react-native';
import { bindActionCreators } from 'redux';
import styles from '../components/styles/styles';
import HomeView from '../components/HomeView';
import * as actionCreators from '../actions/actionCreators';
import Spinner from 'react-native-loading-spinner-overlay';
import Header from './headers/TaskViewHeader';


class TaskView extends Component {
  constructor(props) {
    super(props);

    this.addReward = this.addReward.bind(this);
    this.viewReward = this.viewReward.bind(this);
    this.earnedRewards = this.earnedRewards.bind(this);
    this.back = this.back.bind(this);
    this.logOff = this.logOff.bind(this);
    this.addTask = this.addTask.bind(this);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.events.eventsArray),
    };
  }

  logOff() {
    console.log('logoff');
  };

  earnedRewards() {
    console.log('earnedRewards');
  }

  back() {
    this.props.nav.pop();
  }

  addTask() {
    this.props.nav.push({ name: 'ADD_TASK'});
  }

  addReward(event) {
    this.props.setEvent(event);
    //this.props.nav.push({ name: 'ADD_REWARD'});
    // Alert.alert('REWARD ADD', `the event id is ${id}`);
  }

  viewReward() {

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ dataSource: this.state.dataSource.cloneWithRows(nextProps.events.eventsArray) });
    }
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
          renderRow={(event)=>  (
            <View style={{flex: 1, borderBottomColor: '#757575', borderBottomWidth: 1, paddingLeft: 5, paddingBottom: 10, paddingTop: 10}}>
              <Text style={{fontSize: 20, fontWeight: '900'}}>{event.name}</Text>
              <Text>{event.description}</Text>
              <View style={styles.buttonContainer}>
                <TouchableHighlight style={styles.buttonPoint}><Text style={{fontSize: 15}, styles.smButtonText}>+ POINT</Text></TouchableHighlight>
                {event.rewardId ?
                    <TouchableHighlight onPress={() => this.viewReward(event.rewardId)} style={styles.buttonReward}><Text style={{fontSize: 15}, styles.smButtonText}>VIEW REWARD</Text></TouchableHighlight> :
                    <TouchableHighlight onPress={() => this.addReward(event)} style={styles.buttonReward}><Text style={{fontSize: 15}, styles.smButtonText}>ADD REWARD</Text></TouchableHighlight>
                  }
                <TouchableHighlight style={styles.buttonDelete}><Text style={{fontSize: 15}, styles.smButtonText}>DELETE</Text></TouchableHighlight>
              </View>
            </View>
          )}
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
