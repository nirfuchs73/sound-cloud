import React, { Component } from 'react';
import { connect } from 'react-redux';

import HistoryList from '../../components/HistoryList/HistoryList';

import {
  setSearch,
} from '../../store/actions';

class HistoryPage extends Component {
  render() {
    return (
      <div>
        <h1>Search History</h1>
        <HistoryList history={this.props.history} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    history: state.history,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearch: (value) => { dispatch(setSearch(value)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage);
