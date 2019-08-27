import React from 'react';

const historyItem = (props) => {
  return (
    <div onClick={props.historyItemClicked}>
      <p>{props.title}</p>
    </div>
  );
}

export default historyItem;