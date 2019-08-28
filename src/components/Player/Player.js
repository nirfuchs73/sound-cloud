import React from 'react';

import ReactSoundcloud from 'react-soundcloud-embed';

import classes from './Player.module.css';

const player = (props) => {
  // const url = "https://api.soundcloud.com/tracks/" + props.id;
  return (
    <div className={classes.Player}>
      <ReactSoundcloud url={'https://api.soundcloud.com/tracks/' + props.id} />
    </div>
  );
}

export default player;