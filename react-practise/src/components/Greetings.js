import React from 'react'

function Hello(props){
    return <h1>Hello, {props.name} {props.age} {props.powerLevel}</h1>
}

function Greetings() {
  return (
    <div className='Greetings'>
        <Hello name="Nazar" age="21"/>
        <Hello name="Zaheer" age="50"/>
        <Hello name="Goku" age="100" powerLevel="9001"/>


    </div>
    
  )
}

export default Greetings