import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0);

    function increment(){
        setCount(count+1);
    }

    function decrement(){
        setCount(count-1);
    }

    const [logIn, setLogIn] = useState('false');

    function logged(){
        setLogIn('true');
    }

  return (
    <div>
        
        <h1>your login status: {logIn}</h1>
        <button onClick={logged}>sign in</button>

        <button onClick={increment}>press me increment</button>
        <button onClick={decrement}>press me decrement</button>

        <h1>your count is {count}</h1>

    </div>

    
  )
}

export default Counter