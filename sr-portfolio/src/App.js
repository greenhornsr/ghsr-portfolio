import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

// about me data
import { aboutme } from './assets/data/aboutme-data';

// Components
import {Home, About, ProjectsList} from './components';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" render={() => <About aboutme={aboutme} />} />
        <Route exact path="/projects" render={(props) => <ProjectsList {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
