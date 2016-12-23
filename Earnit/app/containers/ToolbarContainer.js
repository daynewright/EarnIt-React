import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddChildForm from '../components/forms/AddChildForm';
import ToolbarView from '../components/ToolbarView';
import * as actionCreators from '../actions/actionCreators';

class ToolbarContainer extends Component {
  constructor(props) {
    super(props);

    this.onActionSelected = this.onActionSelected.bind(this);
  }

  onActionSelected(position) {
    if (position === 0) {
      this.props.nav.push({name: 'ADD_CHILD'});
    }
    if (position === 1) {
      this.props.logoffUser();
      this.props.nav.push({name: 'HOME'});
    }
  }

  render() {
    return (
      <ToolbarView
        onActionSelected={this.onActionSelected}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(null, mapDispatchToProps)(ToolbarContainer);
