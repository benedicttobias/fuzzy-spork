import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jokes from './jokes'
import LameJokeButton from './lameJokeButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Jokes />
        <LameJokeButton />
      </header>
    </div>
  );
}

export default App;
