import React, { useContext } from 'react';
import ValueContext from './ValueContext';

<<<<<<< HEAD
<<<<<<< Updated upstream
function Child(props) {
       
    return (
      <div >
        Child number: {props.num}
      </div>
    );
=======
=======
>>>>>>> ffbce41bde5d76aa2a2960407896e35f7dd9a2f2
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
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> ffbce41bde5d76aa2a2960407896e35f7dd9a2f2
  }
  
  export default Child;