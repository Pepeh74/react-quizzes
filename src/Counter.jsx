import React from "react";

function Counter() {
    const [count, setCount] = React.useState(0);

    const increment = () => {
      setCount(count + 1);
    };

    const decrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }  
    };

    const reset  = () => {
       setCount(0); 
     } 

    return (
    <>
      <h1>{count}</h1>
      <button onClick= {increment}>+</button>
      <button onClick= {decrement}>-</button>
      <button onClick= {reset}>Resest</button>
    </> 
  )
}

export default Counter;