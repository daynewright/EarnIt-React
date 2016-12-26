import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { bindActionCreators } from 'redux';
import styles from '../components/styles/styles';
import HomeView from '../components/HomeView';
import * as actionCreators from '../actions/actionCreators';

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      children: [],
      dataSource: ds.cloneWithRows(['test', 'test'])
    };
  }


  render() {
    const { nav } = this.props;

    return (
      <HomeView
        nav={nav}
        dataSource={this.state.dataSource}
        />
    );
  }
}

const mapStateToProps = function(state) {
  return {
    user: state.user,
    children: state.children
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
