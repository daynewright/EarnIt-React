import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Alert } from 'react-native';
import { bindActionCreators } from 'redux';
import styles from '../components/styles/styles';
import HomeView from '../components/HomeView';
import * as actionCreators from '../actions/actionCreators';
import Spinner from 'react-native-loading-spinner-overlay';

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.children),
    };

    this.deleteChild = this.deleteChild.bind(this);
    this.viewRewards = this.viewRewards.bind(this);
    this.viewChild = this.viewChild.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ dataSource: this.state.dataSource.cloneWithRows(nextProps.children) });
    }
  }

  viewRewards(childId) {
    console.log('test');
  }

  deleteChild(childId) {
    Alert.alert(null, `This child will be removed: ${childId}`);
    this.props.deleteChild(childId);
  }

  viewChild(childId) {
    this.props.getEvents(childId);
    this.props.nav.push({name: 'VIEW_CHILD'});
  }

  render() {
    const { viewChild, viewRewards, deleteChild, loading, nav } = this.props;

    return (
      <View>
        <Spinner visible={loading} />
        <HomeView
          dataSource={this.state.dataSource}
          viewChild={this.viewChild}
          viewRewards={this.viewRewards}
          deleteChild={this.deleteChild}
          nav={nav}
        />
      </View>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    children: state.children.childArray,
    loading: state.children.loading
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
