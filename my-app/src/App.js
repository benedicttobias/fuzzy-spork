import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jokes from './jokes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Jokes />
      </header>
      <body>
        This is the body of the page!
      </body>
    </div>
  );
}

export default App;
