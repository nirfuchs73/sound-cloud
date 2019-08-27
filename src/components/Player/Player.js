import React from 'react';

import ReactSoundcloud from 'react-soundcloud-embed';

const player = (props) => {
  // const url = "https://api.soundcloud.com/tracks/" + props.id;
  return (
    <div>
      <ReactSoundcloud url={'https://api.soundcloud.com/tracks/' + props.id} />
    </div>
  );
}

export default player;