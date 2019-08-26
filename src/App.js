import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
// import './App.css';
import SearchPage from './containers/SearchPage/SearchPage';
import PlayPage from './containers/PlayPage/PlayPage';
import HistoryPage from './containers/HistoryPage/HistoryPage';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/search">Search</NavLink> |&nbsp;
        <NavLink to="/play">Play</NavLink> |&nbsp;
        <NavLink to="/history">History</NavLink>
      </nav>
      <Switch>
        <Route path="/search" component={SearchPage} />
        <Route path="/play" component={PlayPage} />
        <Route path="/history" component={HistoryPage} />
        <Route render={() => <h1>404 Error - Page Not found</h1>} />
        {/* <Redirect from="/" to="/search" /> */}
      </Switch>
    </div>
  );
}

export default App;
