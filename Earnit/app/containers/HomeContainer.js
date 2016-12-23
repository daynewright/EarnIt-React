import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../components/styles/styles';
import HomeView from '../components/HomeView';
import * as actionCreators from '../actions/actionCreators';

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.getChildren = this.getChildren.bind(this);
  }

  getChildren() {
    this.props.getChildren();
  }

  render() {
    return (
      <HomeView
        children={this.children}
        nav={this.props.nav}
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
