import React from 'react';

const search = (props) => (
  <div>
    <input type="text"
      value={props.search}
      onChange={props.searchChange}
      placeholder="Search tracks..." />
    <button onClick={props.searchClicked}>Go</button>
    <div>
      <button onClick={props.nextClicked}>Next</button>
    </div>
  </div>
);

export default search;
