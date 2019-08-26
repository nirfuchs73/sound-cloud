import React from 'react';

const search = (props) => (
  <div>
    <input type="text"
      value={props.search}
      onChange={props.searchChange}
      placeholder="Search tracks..." />
    <button onClick={props.searchClicked}>Go</button>
  </div>
);

export default search;
