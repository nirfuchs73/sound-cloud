import React from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
// import './App.css';
import Search from './containers/Search/Search';
import Play from './containers/Play/Play';
import History from './containers/History/History';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/search">Search</NavLink> |&nbsp;
        <NavLink to="/play">Play</NavLink> |&nbsp;
        <NavLink to="/history">History</NavLink>
      </nav>
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/play" component={Play} />
        <Route path="/history" component={History} />
        <Route render={() => <h1>404 Error - Page Not found</h1>} />
        {/* <Redirect from="/" to="/search" /> */}
      </Switch>
    </div>
  );
}

export default App;
