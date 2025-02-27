

import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './home'; // Home sayfası bileşeni
import Order from './order'; // Sipariş sayfası bileşeni

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/" >
          <Order/>
          <Link to="/home">Ana sayfaya dön</Link>
        </Route>
      </Switch>
      </Router>
  );
}
export default App;