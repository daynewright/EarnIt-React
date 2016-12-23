import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../components/styles/styles';
import HomeView from '../components/HomeView';
import * as actionCreators from '../actions/actionCreators';

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.addChild = this.addChild.bind(this);
    this.getChildren = this.getChildren.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logoffUser();
    this.props.nav.pop({ name: 'HOME'});
  }

  getChildren() {
    this.props.getChildren();
  }

  addChild() {
    this.props.nav.push({name: 'ADD_CHILD'});
  }

  render() {
    return (
      <HomeView
        logout={this.logout}
        children={this.children}
        addChild={this.addChild}
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
