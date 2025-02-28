

import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './home'; // Home sayfası bileşeni
import Order from './order'; // Sipariş sayfası bileşeni
import Success from './success';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" >
          <Home/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/order"  >
          <Order/>
          <Link to="/home">Ana sayfaya dön</Link>
          <Link to="/success"></Link>
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
      </Router>
  );
}
export default App;