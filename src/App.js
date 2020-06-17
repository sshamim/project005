import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';

function App(props) {

  let [number, setNumber] = useState(1)

  return (
    <div>
      Hello World
      <Parent num = {number}></Parent>
      <button onClick={() => {setNumber(++number)}}>Update Number</button>
    </div>
  );
}

export default App;
