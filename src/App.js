import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';

function App() {
    // Providing a value to be passed on to Provide as initial value
    let value = 1;
       
    return (
        // Adding a Wrapper
        <ValueContext.Provider value={value}>
            <div>
              Hello World
              <Parent></Parent>
            </div>
        </ValueContext.Provider>
    );  
}

export default App;
