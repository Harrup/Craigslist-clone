import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './includes/Header.js'
import Home from './pages/Home.js'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
    }
  }
  clickedBtn = () => {
  }
  render () {
    return (
      <div className="container">
        <Header />
        <Home />
      </div>
    )
  }
}
