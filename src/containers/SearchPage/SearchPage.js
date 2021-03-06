import React, { Component } from 'react';
import { connect } from 'react-redux';
import SCService from '../../services/SCService';
import Search from '../../components/Search/Search';
import Results from '../../components/Results/Results';
import Tiles from '../../components/Tiles/Tiles';

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
    display: 'list',
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
    if (this.state.page < Math.floor(this.props.tracks.length / 6)) {
      this.setState((prevState) => {
        return { page: prevState.page + 1 }
      }, () => {
        this.setTracksToDisplay();
        // console.log(this.state.page);
      });
    }
  }

  prevClicked = () => {
    if (this.state.page > 0) {
      this.setState((prevState) => {
        return { page: prevState.page - 1 }
      }, () => {
        this.setTracksToDisplay();
        // console.log(this.state.page);
      });
    }
  }

  listClicked = () => {
    this.setState({ display: 'list' });
  }

  tileClicked = () => {
    this.setState({ display: 'tile' });
  }

  keyPressed = (target) => {
    if (target.charCode === 13) {
      this.searchClicked();
    }
  }

  searchClicked = () => {
    // console.log('SearchClicked');
    this.props.setHistory(this.props.search);
    this.setState({ page: 0 });
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
        {/* <h2 style={{ marginLeft: '10px' }}>Search for Tracks</h2> */}
        <Search
          search={this.props.search}
          searchChange={this.searchChange}
          searchClicked={this.searchClicked}
          nextClicked={this.nextClicked}
          prevClicked={this.prevClicked}
          listClicked={this.listClicked}
          tileClicked={this.tileClicked}
          keyPressed={this.keyPressed} />
        {this.state.display === 'list' && <Results
          tracksToDisplay={this.state.tracksToDisplay}
          resultClicked={this.resultClicked} />}
        {this.state.display === 'tile' && <Tiles
          tracksToDisplay={this.state.tracksToDisplay}
          resultClicked={this.resultClicked} />}
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
