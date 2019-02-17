import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Gallery from './components/Gallery.js'


export default class Details extends Component {
  constructor () {
    super()
    this.state = {
    }
  }
  componentWillMount(){
    const {match, location, history} = this.props
    const self = this
    axios.get(`/api/${match.params.city}/${match.params.category}/${match.params.listing}/${match.params.item}`)
    .then(function (response) {
      self.setState({
        itemsData:response.data[0]
      }, ()=>{
        console.log(self.state.itemsData);
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render () {
    const {match, location, history} = this.props
    const {itemsData} = this.state
      if(this.state.itemsData != undefined){
        return (
          <section id='details'>
            <div className='container'>
              <div className='white-box'>
                  <section id='user-options'>
                    <div className='ad-navigation'>
                      <a href='#'>Prev</a>
                      <a href='#'>Next</a>
                    </div>
                    <div className='ad-info'>
                      <a href='#'>more ads by this user</a>
                      <a href='#'>contact seller</a>
                    </div>
                  </section>
                  <section id='item-details'>
                    <div className='left-column'>
                      <Gallery itemsData = {this.state.itemsData} />
                    </div>
                    <div className="right-column">
                      <div className='date'>Posted: {itemsData.date}</div>
                      <h3>{itemsData.title}</h3>
                      <h3 className='price'>${itemsData.price}</h3>
                      <div className={`${(match.params.listing != "cars-and-trucks")? "grid deactivate" : "grid"}`}>
                        <div className='detail'>
                          <div className='label'>VIN</div>
                          <div className='info'>{itemsData.extraDetails.vin}</div>
                        </div>
                        <div className='detail'>
                          <div className='label'>Milage</div>
                          <div className='info'>{itemsData.extraDetails.miles}</div>
                        </div>
                        <div className='detail'>
                          <div className='label'>Transmission</div>
                          <div className='info'>{itemsData.extraDetails.transmission}</div>
                        </div>
                        <div className='detail'>
                          <div className='label'>Fuel</div>
                          <div className='info'>{itemsData.extraDetails.fuel}</div>
                        </div>
                        <div className='detail'>
                          <div className='label'>Exterior color</div>
                          <div className='info'>{itemsData.extraDetails.color}</div>
                        </div>
                        <div className='detail'>
                          <div className='label'>Drive</div>
                          <div className='info'>{itemsData.extraDetails.drive}</div>
                        </div>
                        <div className='detail'>
                          <div className='label'>Type</div>
                          <div className='info'>{itemsData.extraDetails.type}</div>
                        </div>
                        <div className='detail'>
                          <div className='label'>Trim</div>
                          <div className='info'>{itemsData.extraDetails.interior}</div>
                        </div>
                        <div className='detail'>
                          <div className='label'>Condition</div>
                          <div className='info'>like new</div>
                        </div>
                      </div>
                      <div className='description'>
                        <h4>Description</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l</p>
                      </div>
                    </div>
                  </section>
              </div>
            </div>
          </section>
        )
      }else{
        return(
            <div>loading</div>
          )
      }

  }
}
