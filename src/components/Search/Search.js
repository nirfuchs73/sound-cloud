import React from 'react';

import classes from './Search.module.css';

const search = (props) => (
  <div>
    <input className={classes.Search} type="text"
      value={props.search}
      onChange={props.searchChange}
      placeholder="Search tracks..." />
    <button className={classes.SearchBtn} onClick={props.searchClicked}>Go</button>
    {/* <div>
      <button onClick={props.nextClicked}>Next</button>
    </div> */}
  </div>
);

export default search;
