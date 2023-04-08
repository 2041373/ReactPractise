import React, { Component } from 'react'
import Menu from '../components/Menu';

function Greeting(props){
    return <h1>Hello, {props.name}</h1>
}


export default class Class extends Component {

    constructor(props){
        super(props);
        this.state = {count:0}
    }

    incrementCount(){
        this.setState({count:this.state.count +1})
    }

    decrementCount(){
        this.setState({count:this.state.count -1})
    }

  render() {
    return (
      <div>

        <Menu name="goku"/>

        <Greeting name = "Nazar"></Greeting>
        <p>count:{this.state.count}</p>
        <button onClick={()=> this.incrementCount()}>+</button>
        <button onClick={()=> this.decrementCount()}>-</button>


      </div>
    )
  }
}
