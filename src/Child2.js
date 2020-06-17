import React, { useContext, useReducer } from 'react';
import numberReducer from './numberReducer';


function Child2() {

    let [state, dispatch] = useReducer(numberReducer, 5)      
        return (
          <div >
            Child 2 Age: {state}
            <br />
            <button onClick={()=>{dispatch({type:"INCREMENT", step: 2})}}>Increment</button>
            <button onClick={()=>{dispatch({type:"DECREMENT", step: 3})}}>Decrement</button>
          </div>
        );
  }
  
  export default Child2;