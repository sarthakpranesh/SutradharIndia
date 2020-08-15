import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

// importing screens
import LandingScreen from './screens/LandingScreen/index.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingScreen}></Route>
      </Switch>
    </Router>
  );
}

export default App;
