import React from 'react';
import './App.scss';
import Intro from './components/Intro'
import CountDownDisplay from './components/CountDownDisplay';

function App() {
  return (
    <div className="App">
        <Intro />
        <CountDownDisplay />
    </div>
  );
}

export default App;
