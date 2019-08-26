import React from 'react';

const search = (props) => (
  <div>
    <input type="text" onChange={props.searchChange} />
    <button onClick={props.searchClicked}>Go</button>
  </div>
);

export default search;
