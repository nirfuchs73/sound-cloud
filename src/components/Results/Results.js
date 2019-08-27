import React from 'react';

import Result from '../Result/Result';

const results = (props) => {
  console.log(props);
  let results = props.tracksToDisplay.map(result => {
    return (
      // <Link to={'/posts/' + post.id} key={post.id}>
      <Result
        key={result.id}
        title={result.title}
      // clicked={() => this.postSelectedHandler(post.id)}
      />
      // </Link>);s
    );
  });
  return (
    <div>
      {results}
    </div>
  );
}

export default results;
