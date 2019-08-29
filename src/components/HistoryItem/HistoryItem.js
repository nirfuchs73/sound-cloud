import React from 'react';

import classes from './HistoryItem.module.css';

const historyItem = (props) => {
  return (
    <div className={classes.HistoryItem} onClick={props.historyItemClicked}>
      <i className="fas fa-search" ></i>
      <div className={classes.Text}>{props.title}</div>
    </div>
  );
}

export default historyItem;