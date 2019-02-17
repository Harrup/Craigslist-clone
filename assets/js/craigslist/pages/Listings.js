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
  loopItems = () => {
    let testArray = [1,2,3,4,5,6,7,8]
    return testArray.map(() => {
      return(
        <div className='details-box'>
          <div className='image'>
            <div className='price'>$3200</div>
          </div>
          <div className='details'>
            <i className="far fa-star"></i>
            <div className='title'>BMW 7series</div>
            <div className='city'>Ottawa</div>
          </div>
        </div>
      )
    })
  }
  render () {
    const {match, location, history } = this.props
    return (
      <div id='listings-page'>
        <div className='container'>
          <section id='filter'>
            <div className='form-group price'>
              <label>Price</label>
              <div className='min-max'>
                <select className='min-price' name='min-price'>
                  <option value='0'>0</option>
                </select>
                <select className='max-price' name='max-price'>
                  <option value='1000'>1000</option>
                </select>
              </div>
            </div>
            <div className='form-group manufacturer'>
              <label>Manufacturer</label>
              <select className='manufacturer' name='manufacturer'>
                <option value='bmw'>BMW</option>
              </select>
            </div>
            <div className='form-group model'>
              <label>Model</label>
              <select className='model' name='model'>
                <option value='bmw'>BMW</option>
              </select>
            </div>
            <div className='form-group button'>
              <div className='primary-btn'>Update</div>
              <div className='reset-btn'>Reset</div>
            </div>
          </section>
        </div>
          <section id='items-section'>
            <div className='container'>
            <section className='views'>
              <div className='form-group view-dropdown'>
                <select className='display-type'  name='display-type'>
                  <option vlaue='grid'>Grid</option>
                  <option vlaue='list'>List</option>
                  <option vlaue='thumb'>Thumbnail</option>
                </select>
              </div>
              <div className='form-group view-order'>
                <select className='order'  name='order'>
                  <option vlaue='newest'>newest</option>
                </select>
              </div>
            </section>
            <section id='page-results'>
              {this.loopItems()}
            </section>
            </div>
          </section>
        </div>
    )
  }
}
