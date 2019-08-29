import React from 'react';

import classes from './Result.module.css';

const result = (props) => {
  return (
    <div className={classes.Result} onClick={props.resultClicked}>
      <div className={classes.Center}>
        <i className="fas fa-play"></i>
      </div>
      <div className={classes.Text}>{props.title}</div>
    </div>
  );
}

export default result;