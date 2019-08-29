import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../components/Logo/Logo';

import classes from './Header.module.css';

class Header extends Component {
  render() {
    const active = {
      color: 'white',
      backgroundColor: '#111111',
    }
    return (
      <nav className={classes.Header}>
        <Logo />
        <NavLink activeStyle={active} to="/search">Search</NavLink>
        <NavLink activeStyle={active} to="/play">Play</NavLink>
        <NavLink activeStyle={active} to="/history">History</NavLink>
      </nav>
    );
  }
}

export default Header;