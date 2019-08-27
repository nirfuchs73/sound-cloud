import React from 'react';

import classes from './HistoryItem.module.css';

const historyItem = (props) => {
  return (
    <div className={classes.HistoryItem} onClick={props.historyItemClicked}>
      <div>{props.title}</div>
    </div>
  );
}

export default historyItem;