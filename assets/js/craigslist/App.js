import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import Header from './includes/Header.js'
import Home from './pages/Home.js'
import Listings from './pages/Listings.js'
import Category from './pages/Category.js'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
    }
  }
  clickedBtn = () => {
  }
  render () {
    const {match, } = this.props
    return (
      <Router>
        <div className="container">
          <Header />
          <Route exact path='/' component = {Home} />
          <Route exact path='/:city' component = {Home} />
          <Route exact path='/:city/:category' component = {Category} />
          <Route exact path='/:city/:category/:listing' component = {Listings} />
          <Route exact path='/:city/:category/:listing/:item' component = {Listings} />
        </div>
      </Router>
    )
  }
}
