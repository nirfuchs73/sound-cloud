import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Tiles.module.css';

import Tile from '../Tile/Tile';

const tiles = (props) => {
  let tiles = props.tracksToDisplay.map(tile => {
    return (
      <Link to={'/play'} key={tile.id}>
        <Tile
          // key={tile.id}
          title={tile.title}
          tileClicked={() => props.resultClicked(tile.id)}
        />
      </Link>
    );
  });

  return (
    <div className={classes.Tiles}>
      {tiles}
    </div>
  );
}

export default tiles;
