import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// Main Functional component which will be rendered as a root
const App = () => {

 // useState has to be initialized inside the functional component
  const [counter, setCounter] = useState(0); //0 is the initial value. useState function returns state and a function in an array

 // main logic has to be given in the closure function so that all three buttons will point to the same Counter
  const incrementCounter = () => {
    return function(e) {
      const expression = e.target.innerHTML.trim(); 
      //console.log(expression.length);
    switch (expression)
    {
      case 'Increment':
        setCounter(()=>counter + 1); //logic of a setCounter function has to be given in a callback function
        break;
      case 'Decrement':
        setCounter(()=>counter - 1);  
        break;
      case 'Reset':
        setCounter(0);  
    }  
    }
  }

  // Actual elements to be rendered on the page
  return(
  <>
  <p style= {{color:"green", fontSize:"32px"}}>{counter}</p>
   {/* click event handler works on the inner closure function */ }
  <div>
  <button className="btn" onClick={incrementCounter()}>Increment</button>
  <button className="btn" onClick={incrementCounter()}>Decrement</button>
  <button className="btn" onClick={incrementCounter()}>Reset</button>
  </div>
  </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

