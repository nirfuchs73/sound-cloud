import React from 'react';

import classes from './Search.module.css';

const search = (props) => (
  <div className={classes.Search}>
    <input className={classes.SearchInput} type="text"
      value={props.search}
      onChange={props.searchChange}
      onKeyPress={props.keyPressed}
      placeholder="Search tracks..." />
    <button className={classes.SearchBtn} onClick={props.searchClicked}>Go</button>
  </div>
);

export default search;
