import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent';

function App(props) {
  
  let [number, setNumber] = useState(45)

  return (
    <div>
      Hello World
      <Parent num = {number}></Parent>
    </div>
  );
}

export default App;
