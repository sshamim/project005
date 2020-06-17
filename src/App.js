import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';

<<<<<<< Updated upstream
function App(props) {

  let [number, setNumber] = useState(1)

  return (
    <div>
      Hello World
      <Parent num = {number}></Parent>
      <button onClick={() => {setNumber(++number)}}>Update Number</button>
    </div>
  );
=======
function App() {
    // Providing a value to be passed on to Provider as initial value
    // Since we are using useState, it generally returns two values
    // This value array will have two values
    // value[0] = some value
    // value[1] = some  function

    let number = useState(1)
       
    return (
        // Adding a Wrapper
        <ValueContext.Provider value={number}>
            <div>
              Hello World
              <Parent></Parent>
            </div>
        </ValueContext.Provider>
    );  
>>>>>>> Stashed changes
}

export default App;
