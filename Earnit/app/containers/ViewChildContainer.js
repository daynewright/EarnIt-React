import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import styles from '../components/styles/styles';
import HomeView from '../components/HomeView';
import * as actionCreators from '../actions/actionCreators';
import Spinner from 'react-native-loading-spinner-overlay';

class ViewChildContainer extends Component {
  constructor(props) {
    super(props);

    console.log('************', props.events);

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
            <Text>{event.name} | {event.description} | type: {event.type}</Text>
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
