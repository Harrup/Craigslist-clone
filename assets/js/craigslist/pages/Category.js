import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Category extends Component {
  constructor () {
    super()
    this.state = {
    }
  }
  clickedBtn = () => {
  }
  render () {
    const {match, location, history} = this.props

    return (
      <div >
        <h1>Category page</h1>
        <h3>Category:{match.params.category}</h3>
      </div>
    )
  }
}
