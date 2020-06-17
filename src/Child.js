import React, { useContext } from 'react';
import ValueContext from './ValueContext';


function Child() {
    let count = useContext(ValueContext)
      let updateValue = count[1]
        return (
          <div >
            Child number: {count[0]}
            <br />
            <button onClick={()=>{updateValue (++count[0])}}>Increase</button>
          </div>
        );
  }
  
  export default Child;