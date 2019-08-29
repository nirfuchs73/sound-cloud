import React from 'react';

import classes from './Search.module.css';

const search = (props) => (
  <div className={classes.Search}>
    <input className={classes.SearchInput} type="text"
      value={props.search}
      onChange={props.searchChange}
      onKeyPress={props.keyPressed}
      placeholder="Search" />
    <button className={classes.Btn} onClick={props.searchClicked}><i className="fas fa-search"></i></button>
    <div className={classes.Control}>
      <button className={classes.Btn} onClick={props.prevClicked}><i className="fas fa-step-backward"></i></button>
      <button className={classes.Btn} onClick={props.nextClicked}><i className="fas fa-step-forward"></i></button>
      <button className={classes.Btn} onClick={props.listClicked}><i className="fas fa-list"></i></button>
      <button className={classes.Btn} onClick={props.tileClicked}><i className="fas fa-th-large"></i></button>
    </div>
  </div >
);

export default search;
