import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

// importing screens
import LandingScreen from './screens/LandingScreen/index.js';

import {firebaseAuth} from './config/firebase.js';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user === null) {
        firebaseAuth.signInAnonymously()
        .then((user) => setUser(user))
        .catch((err) => {
          console.log(err)
        })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingScreen}></Route>
      </Switch>
    </Router>
  );
}

export default App;
