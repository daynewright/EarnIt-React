import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View } from 'react-native';
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
      dataSource: ds.cloneWithRows(props.children.childArray),
    };

    this.deleteChild = this.deleteChild.bind(this);
    this.viewRewards = this.viewRewards.bind(this);
    this.viewChild = this.viewChild.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ dataSource: this.state.dataSource.cloneWithRows(nextProps.children.childArray) });
    }
  }

  viewRewards(childId) {
    console.log('test');
  }

  deleteChild(childId) {
    this.props.deleteChild(childId);
    this.props.setChild({name: null, age: null, id: null});
  }

  viewChild(child) {
    this.props.setChild(child);
    this.props.getEvents(child.childId);
    this.props.nav.push({name: 'VIEW_CHILD'});
  }

  render() {
    const { loading, nav, children } = this.props;
    const { viewChild, viewRewards, deleteChild } = this;

    return (
      <View>
        <Spinner visible={loading} />
        <HomeView
          dataSource={this.state.dataSource}
          viewChild={viewChild}
          viewRewards={viewRewards}
          deleteChild={deleteChild}
          nav={nav}
          children={children}
        />
      </View>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    children: state.children,
    loading: state.children.loading
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
