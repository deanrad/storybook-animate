import React, { Component } from "react"
import { Color } from "ink"

export default class Counter extends Component {
  constructor() {
    super()

    this.state = {
      i: 0
    }
  }

  render() {
    return <Color green>{this.state.i} tests passed</Color>
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        i: this.state.i + 1
      })
      this.state.i >= 25 && clearInterval(this.timer)
    }, 100)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }
}
