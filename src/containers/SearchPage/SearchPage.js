import React, { Component } from 'react';
import { connect } from 'react-redux';
import SCService from '../../services/SCService';
import Search from '../../components/Search/Search';
import Results from '../../components/Results/Results';

import classes from './SearchPage.module.css';

import {
  setSearch,
  setHistory,
  setTracks,
  setCurrentTrackID,
  // setPage,
} from '../../store/actions';


class SearchPage extends Component {
  state = {
    // search: '',
    // tracks: [],
    page: 0,
    tracksToDisplay: [],
  }

  componentDidMount() {
    if (this.props.search) {
      this.searchClicked();
    } else {
      this.setTracksToDisplay();
    }
  }

  setTracksToDisplay = () => {
    var index = this.state.page * 6;
    const results = this.props.tracks.slice(index, index + 6);
    this.setState({ tracksToDisplay: results }, () => {
      // console.log(this.state.tracksToDisplay);
    });
  }

  searchChange = (event) => {
    this.props.setSearch(event.target.value);
  }

  nextClicked = () => {
    this.setState((prevState) => {
      return { page: prevState.page + 1 }
    }, () => {
      this.setTracksToDisplay();
    });
  }

  keyPressed = (target) => {
    if (target.charCode === 13) {
      this.searchClicked();
    }
  }

  searchClicked = () => {
    console.log('SearchClicked');
    this.props.setHistory(this.props.search);
    SCService.query(this.props.search)
      .then(tracks => {
        this.props.setTracks(tracks);
        this.setTracksToDisplay();
      });
  }

  resultClicked = (id) => {
    this.props.setCurrentTrackID(id);
  }

  render() {
    return (
      <div className={classes.Wrapper}>
        <h2 style={{ marginLeft: '10px' }}>Search for Tracks</h2>
        <Search
          search={this.props.search}
          searchChange={this.searchChange}
          searchClicked={this.searchClicked}
          nextClicked={this.nextClicked}
          keyPressed={this.keyPressed} />
        <Results
          tracksToDisplay={this.state.tracksToDisplay}
          resultClicked={this.resultClicked}
        />
        <button className={classes.NextBtn} onClick={this.nextClicked}>Next</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('mapStateToProps', state);
  return {
    search: state.search,
    history: state.history,
    tracks: state.tracks,
    currentTrackID: state.currentTrackID,
    // page: state.page,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearch: (value) => { dispatch(setSearch(value)) },
    setHistory: (value) => { dispatch(setHistory(value)) },
    setTracks: (value) => { dispatch(setTracks(value)) },
    setCurrentTrackID: (id) => { dispatch(setCurrentTrackID(id)) },
    // setPage: () => { dispatch(setPage()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
