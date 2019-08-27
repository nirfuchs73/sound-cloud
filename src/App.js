import React from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
// import './App.css';
import classes from './App.module.css';
import store from './store';
import SearchPage from './containers/SearchPage/SearchPage';
import PlayPage from './containers/PlayPage/PlayPage';
import HistoryPage from './containers/HistoryPage/HistoryPage';

function App() {
  return (
    <div className={classes.App}>
      <nav className={classes.Nav}>
        <NavLink to="/search">Search</NavLink> |&nbsp;
        <NavLink to="/play">Play</NavLink> |&nbsp;
        <NavLink to="/history">History</NavLink>
      </nav>
      <Switch>
        {/* <Route path="/search" component={SearchPage} /> */}
        <Route path='/search' render={(props) => <SearchPage store={store} {...props} />} />
        {/* <Route path="/play" component={PlayPage} /> */}
        <Route path='/play' render={(props) => <PlayPage store={store} {...props} />} />
        {/* <Route path="/history" component={HistoryPage} /> */}
        <Route path='/history' render={(props) => <HistoryPage store={store} {...props} />} />
        {/* <Route render={() => <h1>404 Error - Page Not found</h1>} /> */}
        <Redirect from="/" to="/search" />
      </Switch>
    </div>
  );
}

export default App;
