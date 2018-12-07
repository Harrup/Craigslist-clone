import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
    }
  }
  clickedBtn = () => {
  }
  render () {
    const {match, location, history } = this.props
    return (
      <div >
        <h1>Listings page</h1>
        <div>city : {match.params.city}</div>
        <div>category : {match.params.category}</div>
        <div>listing : {match.params.listing}</div>
        <div>item : {match.params.item}</div>
      </div>
    )
  }
}
