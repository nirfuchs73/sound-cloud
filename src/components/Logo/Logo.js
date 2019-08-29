import React from 'react';

import Logo from '../../assets/soundcloud.jpg';
import classes from './Logo.module.css';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={Logo} alt="SoundCloud" />
  </div>
);

export default logo;