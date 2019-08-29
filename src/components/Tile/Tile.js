import React from 'react';

import classes from './Tile.module.css';

const tile = (props) => {
  return (
    <div className={classes.Tile} onClick={props.tileClicked}>
      <div className={classes.Title}>{props.title}</div>
      <div className={classes.Image} style={{ backgroundImage: `url(${props.image})` }}></div>
    </div>
  );
}

export default tile;