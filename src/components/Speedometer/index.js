// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count === 200) {
      this.setState(preState => {
        console.log(`previous state value is ${preState.count}`)
        return {count: 200}
      })
    } else {
      this.setState(preState => {
        console.log(`previous state value is ${preState.count}`)
        return {count: preState.count + 10}
      })
    }
  }

  onDecrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(preState => ({count: preState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1>SPEEDOMETER</h1>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="Speedometer"
        />
        <h1 className="small-heading">Speed is {count}mph</h1>
        <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>

        <button onClick={this.onIncrement} className="button1" type="button">
          Accelerate
        </button>
        <button onClick={this.onDecrement} className="button" type="button">
          Apply Brake
        </button>
      </div>
    )
  }
}

export default Speedometer
