import React from 'react';
import { Link } from 'react-router-dom';

import HistoryItem from '../HistoryItem/HistoryItem';

import classes from './HistoryList.module.css';

const historyList = (props) => {
  let historyList = props.history.map((historyItem, idx) => {
    return (
      <Link to={'/search'} key={idx}>
        <HistoryItem
          // key={idx}
          title={historyItem}
          historyItemClicked={() => props.historyItemClicked(historyItem)} />
      </Link>
    );
  });
  return (
    <div className={classes.HistoryList}>
      {historyList}
    </div>
  );

}

export default historyList;