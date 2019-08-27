import React from 'react';
import { Link } from 'react-router-dom';

import HistoryItem from '../HistoryItem/HistoryItem';

const historyList = (props) => {
  let historyList = props.history.map((historyItem, idx) => {
    return (
      <Link to={'/search'} key={idx}>
        <HistoryItem
          // key={idx}
          title={historyItem}
          // historyItemClicked={() => props.historyItemClicked(result.id)}
          historyItemClicked={props.historyItemClicked}
        />
      </Link>
    );
  });
  return (
    <div>
      {historyList}
    </div>
  );

}

export default historyList;