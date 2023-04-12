import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

// this counter method will use redux state managment 

function Counter3() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch({ type: 'INCREMENT' });
    }
    const handleDecrement = () => {
        dispatch({ type: 'DECREMENT' });
    }

  return (
    <div>
        <h1>Count: {count} </h1> 
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter3