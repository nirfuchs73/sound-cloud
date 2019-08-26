import React from 'react';

const search = (props) => (
  <div>
    <input type="text" />
    <button onClick={props.searchClicked}>Go</button>
  </div>
);

export default search;
