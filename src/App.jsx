

import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home'; // Home sayfası bileşeni
import Order from './order'; // Sipariş sayfası bileşeni

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/order" component={Order} />
      </Switch>
    </Router>
  );
}
export default App;