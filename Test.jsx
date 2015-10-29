import React, { Component } from "react"


export default class Test extends Component{
  constructor(){
    super()
    this.state = {
      count: 0
    }
  }
  handlAAA(){
    this.setState({
      count: ++this.state.count
    })
  }
  render(){
    return <button onClick={ this.handlAAA.bind(this) } >{this.state.count}</button>
  }
}