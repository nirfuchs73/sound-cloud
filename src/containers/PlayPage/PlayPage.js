import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './PlayPage.module.css';
import Player from '../../components/Player/Player';

class PlayPage extends Component {
  render() {
    return (
      <div className={classes.Wrapper}>
        <h2 style={{ marginLeft: '10px' }}>Play Track</h2>
        <Player id={this.props.currentTrackID} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentTrackID: state.currentTrackID,
  }
}

export default connect(mapStateToProps, null)(PlayPage);
