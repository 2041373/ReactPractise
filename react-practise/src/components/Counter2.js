import React from 'react'

const CounterContext = React.createContext(0);

function Counter2() {

    const [count, setCount] = React.useState(0);

  return (
    <CounterContext.Provider value={{count, setCount}}>
    <div>
        <Counter/>
        <Button/>
    </div>
    </CounterContext.Provider>
  )

  function Counter(){
    const {count} = React.useContext(CounterContext);
    return(
        <div>
            Count:  {count}
        </div>
    )
    
  }

  function Button(){
    const {count, setCount} = React.useContext(CounterContext);
    return(
        <button onClick={()=> setCount(count+1)}>Test</button>
    )
  }

}

export default Counter2