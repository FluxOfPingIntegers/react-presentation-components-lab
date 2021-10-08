// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {

  constructor(props) {
    super()

    this.state = {
      mood: props.mood,
    }
  }

  handleClick = () => {
    let mood = this.state.mood === "happy" ? "sad" : "happy";
    this.setState({
      mood: mood,
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  } 

}

SimpleComponent.defaultProps = {
  mood: "happy",
}