import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
    }
  }
  clickedBtn = () => {
  }
  render () {
    return (
      <header>
        <div className="left-menu">
          <div className="logo">Craigslist</div>
          <div className="city">Ottawa <i className="fas fa-chevron-down"></i></div>
        </div>
        <div className="right-menu">
          <div className="user-img"><i className="far fa-user"></i></div>
          <div className="account">My account <i className="fas fa-chevron-down"></i></div>
          <div className="post-btn">Post to classifieds</div>
        </div>
      </header>
    )
  }
}
