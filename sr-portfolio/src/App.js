import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

// about me data
import { aboutme } from './assets/data/aboutme-data';

// Components
import {Home, About, ProjectsList, ContactForm} from './components';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" render={() => <About aboutme={aboutme} />} />
        <Route path="/projects" render={(props) => <ProjectsList {...props} />} />
        <Route path="/contact" render={(props) => <ContactForm {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
