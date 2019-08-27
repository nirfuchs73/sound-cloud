import React from 'react';
import { Link } from 'react-router-dom';

import Result from '../Result/Result';

const results = (props) => {
  console.log(props);
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
    <div>
      {results}
    </div>
  );
}

export default results;
