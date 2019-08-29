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
      <Header />
      <Switch>
        <Route path="/search" component={SearchPage} />
        <Route path="/play" component={PlayPage} />
        <Route path="/history" component={HistoryPage} />
        <Redirect from="/" to="/search" />
      </Switch>
    </div>
  );
}

export default App;
