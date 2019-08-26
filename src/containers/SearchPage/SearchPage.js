import React, { Component } from 'react';
import Search from '../../components/Search/Search';
import { connect } from 'react-redux';
import SCService from '../../services/SCService';

import {
  setSearch,
} from '../../store/actions';


class SearchPage extends Component {
  state = {
    // search: ''
  }

  searchChange = (event) => {
    // this.setState({ search: event.target.value }, () => {
    //   console.log(this.state.search);
    // });
    this.props.setSearch(event.target.value);
    // console.log(this.props.search);
  }

  searchClicked = () => {
    console.log('SearchClicked');
    // SCService.query(this.state.search)
    SCService.query(this.props.search)
      .then(function (tracks) {
        const results = tracks.slice(0, 6);
        console.log(results);
      });
  }

  render() {
    return (
      <div>
        <h1>The Search Page</h1>
        <Search
          searchChange={this.searchChange}
          searchClicked={this.searchClicked} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('mapStateToProps', state);
  return {
    search: state.search,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearch: (value) => { dispatch(setSearch(value)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
