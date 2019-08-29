import React from 'react';

import classes from './Tile.module.css';

const tile = (props) => {
  return (
    <div className={classes.Tile} onClick={props.tileClicked}>
      {props.title}
    </div>
  );
}

export default tile;