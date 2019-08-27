import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Results.module.css';

import Result from '../Result/Result';

const results = (props) => {
  let results = props.tracksToDisplay.map(result => {
    return (
      <Link to={'/play'} key={result.id}>
        <Result
          // key={result.id}
          title={result.title}
          resultClicked={() => props.resultClicked(result.id)}
        />
      </Link>
    );
  });

  return (
    <div className={classes.Results}>
      {results}
    </div>
  );
}

export default results;
