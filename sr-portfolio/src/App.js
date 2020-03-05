import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

// about me data
import { aboutme } from './assets/data/aboutme-data';

// Components
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" render={(props) => <About {...props} aboutme={aboutme} />} />
      </Switch>
    </div>
  );
}

export default App;
