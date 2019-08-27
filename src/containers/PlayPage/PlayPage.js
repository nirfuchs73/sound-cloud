import React, { Component } from 'react';
import { connect } from 'react-redux';

import Player from '../../components/Player/Player';

class PlayPage extends Component {
  render() {
    return (
      <div>
        <h1>The Play Page</h1>
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
