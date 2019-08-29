import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import './App.css';
import classes from './App.module.css';
// import store from './store';
import Header from './containers/Header/Header';
import SearchPage from './containers/SearchPage/SearchPage';
import PlayPage from './containers/PlayPage/PlayPage';
import HistoryPage from './containers/HistoryPage/HistoryPage';

function App() {
  return (
    <div className={classes.App}>
      {/* <nav className={classes.Nav}>
        <NavLink activeStyle={{ color: 'white' }} to="/search">Search</NavLink>
        <NavLink activeStyle={{ color: 'white' }} to="/play">Play</NavLink>
        <NavLink activeStyle={{ color: 'white' }} to="/history">History</NavLink>
      </nav> */}
      <Header />
      <Switch>
        <Route path="/search" component={SearchPage} />
        <Route path="/play" component={PlayPage} />
        <Route path="/history" component={HistoryPage} />
        {/* <Route path='/search' render={(props) => <SearchPage store={store} {...props} />} /> */}
        {/* <Route path='/play' render={(props) => <PlayPage store={store} {...props} />} /> */}
        {/* <Route path='/history' render={(props) => <HistoryPage store={store} {...props} />} /> */}
        {/* <Route render={() => <h1>404 Error - Page Not found</h1>} /> */}
        <Redirect from="/" to="/search" />
      </Switch>
    </div>
  );
}

export default App;
