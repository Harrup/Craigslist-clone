import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
    }
  }
  clickedBtn = () => {
  }
  loopCategories = () =>{
    let array = [1,2,3,4,5,6,7];
    return array.map(()=>{
      return(
        <div className='category'>
          <div className='title'>Community</div>
          <div className='links'>
            <a href='#' className='link'>Community</a>
            <a href='#' className='link'>General</a>
            <a href='#' className='link'>Activities</a>
            <a href='#' className='link'>Groups</a>
            <a href='#' className='link'>Artists</a>
            <a href='#' className='link'>Local News</a>
            <a href='#' className='link'>Child Care</a>
            <a href='#' className='link'>Lost & Found</a>
            <a href='#' className='link'>Classes</a>
            <a href='#' className='link'>Musician</a>
            <a href='#' className='link'>Events</a>
            <a href='#' className='link'>Pets</a>
          </div>
        </div>
      )
    })
  }
  loopTags = () =>{
    let array = [1,2,3,4,5,6,7]
    return array.map(()=>{
        return(
          <div className='tag'>Apple Macbook</div>
        )
      })
  }
  render () {
    return (
      <div id='home'>
        <h1> Connecting People <br /> Everywhere </h1>
        <section className='link-section'>
          {this.loopCategories()}
        </section>
        <section className="trending">
          <input type='text' name='search' className='search' placeholder="search" />
          <div className="trending-title"><i className="far fa-clock"></i> Trending Now</div>
          <div className="trending-tags">
            {this.loopTags()}
          </div>
        </section>
      </div>
    )
  }
}
