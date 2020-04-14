import React from 'react';
import Contact from './components/Contact'
import './components/Contactstyle.css';
import data from './components/data'


function App() {
  return (
    <div className="App">
    <Contact {...data}/>
  </div>
  );
}

export default App;


