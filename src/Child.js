import React from 'react';

<<<<<<< Updated upstream
function Child(props) {
       
    return (
      <div >
        Child number: {props.num}
      </div>
    );
=======
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
>>>>>>> Stashed changes
  }
  
  export default Child;