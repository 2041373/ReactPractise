import React, { Component } from 'react'


export default class States extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
    }
  }

  render() {

  const  increment = () => {
      this.setState({counter:this.state.counter +1})
    }

  const  decrement = () => {
       this.setState({counter:this.state.counter -1})
    }

    return (
      <div>

      <button onClick={() => increment()}> + </button>

      <h1>{this.state.counter}</h1>

      <button onClick={() => decrement()}> - </button>



      </div>
    )
  }
}
