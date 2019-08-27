import React, { Component } from 'react';
import Search from '../../components/Search/Search';
import { connect } from 'react-redux';
import SCService from '../../services/SCService';

import {
  setSearch,
  setHistory,
  // setPage,
} from '../../store/actions';


class SearchPage extends Component {
  state = {
    // search: ''
    tracks: [],
    page: 0,
  }

  searchChange = (event) => {
    // this.setState({ search: event.target.value }, () => {
    //   console.log(this.state.search);
    // });
    this.props.setSearch(event.target.value);
  }

  nextClicked = () => {
    this.setState((prevState) => {
      return { page: prevState.page + 1 }
    }, () => {
      // console.log(this.state.page)
      var index = this.state.page * 6;
      const results = this.state.tracks.slice(index, index + 6);
      console.log(results);
    });
    // console.log(this.props.page);
    // this.props.setPage();
  }

  searchClicked = () => {
    console.log('SearchClicked');
    // SCService.query(this.state.search)
    this.props.setHistory(this.props.search);
    SCService.query(this.props.search)
      .then(tracks => {
        this.setState({ tracks: tracks }, () => {
          var index = this.state.page * 6;
          // const results = tracks.slice(0, 6);
          const results = this.state.tracks.slice(index, index + 6);
          console.log(results);
        });
        // console.log(results[0].stream_url);
        // SCService.play('http://soundcloud.com/forss/flickermood');
      });
  }

  render() {
    return (
      <div>
        <h1>The Search Page</h1>
        <Search
          search={this.props.search}
          searchChange={this.searchChange}
          searchClicked={this.searchClicked}
          nextClicked={this.nextClicked} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  return {
    search: state.search,
    history: state.history,
    // page: state.page,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearch: (value) => { dispatch(setSearch(value)) },
    setHistory: (value) => { dispatch(setHistory(value)) },
    // setPage: () => { dispatch(setPage()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
