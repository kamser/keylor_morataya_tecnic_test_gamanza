import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import SearchAppBar from './components/generalComponents/navigationBar';
import EpisodePage from './components/episodePage/index';
import HomePage from './components/homePage/index';

function App() {
  return (
    <Router>
      <div className="App">
        <SearchAppBar/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/episodes' component={EpisodePage}/>
          <Route exact path='/home' component={HomePage}/>
        </Switch>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
    </div>
    </Router>
  );
}

export default App;
