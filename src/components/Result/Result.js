import React from 'react';


const result = (props) => {  
  return (
    <div>
      <p>{props.title}</p>
    </div>
  );
  // <article className="Post" onClick={props.clicked}>
  //     <h1>{props.title}</h1>
  //     <div className="Info">
  //         <div className="Author">{props.author}</div>
  //     </div>
  // </article>
}

export default result;