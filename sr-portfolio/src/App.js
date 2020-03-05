import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

// Components
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
