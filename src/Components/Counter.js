import React, { useReducer } from "react";

const initialValue = 0;
const reducer = (state, action) =>{
    switch(action){
        case "Increase":
            return state + 1;

        case "decrease":
            return state - 1;

        case "reset":
            return state = 0

        default:
            return initialValue;
    }
}

const Counter = () => {
  const[counterState, dispatch] = useReducer(reducer, initialValue);

  return(
      <div>
          <button onClick = {() => {dispatch("Increase")}}>Increase</button>
          <h1>{counterState}</h1>
          <button onClick = {() => {dispatch("decrease")}}>Decrease</button>
          <button onClick = {() => {dispatch("reset")}}>Reset</button>
      </div>
  )
};

export default Counter;
