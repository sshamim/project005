import React,{ Context } from 'react';

// Creating a Context Provider to provide the value to Consumer(s) and
// specifying a default value of 100
const ValueContext = React.createContext(100, ()=>{});


export default ValueContext;
