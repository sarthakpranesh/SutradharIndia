import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

// importing screens
import LandingScreen from './screens/LandingScreen/index.js';
import ShopScreen from './screens/ShopScreen/index.js';

import {firebaseAuth} from './config/firebase.js';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged(function(user) {
      if (user) {
        setUser(user)
      }
    });
    if (user == null) {
      firebaseAuth.signInAnonymously().catch((err) => {
        console.log(err)
      })
    }
  }, [user])

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingScreen}></Route>
        <Route exact path="/shop" component={ShopScreen}></Route>
      </Switch>
    </Router>
  );
}

export default App;
