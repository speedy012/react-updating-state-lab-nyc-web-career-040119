// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
  state = {
      timesClicked: 0
    }

  onClick = () => {
    const incrementClick = this.state.timesClicked + 1
    this.setState ({timesClicked: incrementClick})
  }

  render() {
    return (
      <button onClick={this.onClick}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker
