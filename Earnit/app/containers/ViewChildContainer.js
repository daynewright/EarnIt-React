import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text, TouchableHighlight } from 'react-native';
import { bindActionCreators } from 'redux';
import styles from '../components/styles/styles';
import HomeView from '../components/HomeView';
import * as actionCreators from '../actions/actionCreators';
import Spinner from 'react-native-loading-spinner-overlay';


class ViewChildContainer extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.events),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ dataSource: this.state.dataSource.cloneWithRows(nextProps.events) });
    }
  }

  render() {
    const { loading } = this.props;

    return (
      <View>
      <Spinner visible={loading} />
        <ListView
        dataSource={this.state.dataSource}
        renderRow={(event)=>  (
          <View style={{flex: 1, borderBottomColor: '#757575', borderBottomWidth: 1, paddingLeft: 5, paddingBottom: 10, paddingTop: 10}}>
            <Text style={{fontSize: 20, fontWeight: '900'}}>{event.name}</Text>
            <Text>{event.description}</Text>
            <View style={styles.buttonContainer}>
              <TouchableHighlight style={styles.buttonPoint}><Text style={{fontSize: 15}, styles.smButtonText}>+ POINT</Text></TouchableHighlight>
              <TouchableHighlight style={styles.buttonReward}><Text style={{fontSize: 15}, styles.smButtonText}>VIEW REWARD</Text></TouchableHighlight>
              <TouchableHighlight style={styles.buttonDelete}><Text style={{fontSize: 15}, styles.smButtonText}>DELETE</Text></TouchableHighlight>
            </View>
          </View>
        )}
      />
      </View>
    );
  }

}

const mapStateToProps = function(state) {
  return {
    events: state.events.eventsArray,
    loading: state.events.loading
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ViewChildContainer);
