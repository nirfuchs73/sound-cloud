import React, { Component } from 'react';
import { connect } from 'react-redux';

import HistoryList from '../../components/HistoryList/HistoryList';
import classes from './HistoryPage.module.css';

import {
  setSearch,
} from '../../store/actions';

class HistoryPage extends Component {

  historyItemClicked = (search) => {
    console.log('historyItemClicked');
    this.props.setSearch(search);
  }

  render() {
    return (
      <div className={classes.Wrapper}>
        {/* <h2 style={{ marginLeft: '10px' }}>Search History</h2> */}
        <HistoryList
          history={this.props.history}
          historyItemClicked={this.historyItemClicked} />
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
