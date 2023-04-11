import React, { useEffect, useState } from 'react'

// this counter uses useEffect 

function Counter1() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("i'm being rendered when count is clicked");
    }, [count]);

  

  return (
    <div>
        
        the current count is <br></br> check console to see renders: <br></br>
        {count}
        <br></br>
        <button onClick={() => setCount(count + 1)}> count +</button>

    </div>
  )
}

export default Counter1