import React from 'react';

import classes from './HistoryItem.module.css';

const historyItem = (props) => {
  return (
    <div className={classes.HistoryItem} onClick={props.historyItemClicked}>
      <div className={classes.Center}>
        <i className="fas fa-search" ></i>
      </div>
      <div className={classes.Text}>{props.title}</div>
    </div>
  );
}

export default historyItem;