import React from 'react';
import './App.css';

// Components
import Nav from './components/navcomponents/Nav';
import Name from './components/portfolio-owner/Name';
import LanguageList from './components/languages-ticker/LanguageList';

function App() {
  return (
    <div className="App">
      <Nav />
      <Name/>
      <LanguageList />
    </div>
  );
}

export default App;
