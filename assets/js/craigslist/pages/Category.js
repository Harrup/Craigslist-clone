import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import qs from 'query-string'

export default class category extends Component {
  constructor () {
    super()
    this.state = {
      manufacturer:'bmw',
      model:'model',
      min_price:'0',
      max_price:'5000',
      display_type:'grid',
      order:'newest'
    }
  }
  componentWillMount(){
    const {match, history} = this.props
    const self = this
    const queryParams = qs.parse(this.props.location.search)
    const {min_price,max_price,display_type,order} = queryParams
    const {itemsData} = this.state

    if(match.params.listing != undefined && min_price != undefined){
      axios.get(`/api/${match.params.city}/${match.params.category}/${match.params.listing}?min_price=${min_price}&max_price=${max_price}&display_type=${display_type}&order=${order}`)
      .then(function (response) {
        self.setState({
          itemsData:response.data
        }, ()=>{
          //console.log(self.state.itemsData);
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    } else if (match.params.listing != undefined && min_price == undefined) {
      axios.get(`/api/${match.params.city}/${match.params.category}/${match.params.listing}`)
      .then(function (response) {
        //console.log(match.params.city);
        self.setState({
          itemsData:response.data
        }, ()=>{
          //console.log(self.state.itemsData);
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    }else if(match.params.category != undefined && min_price != undefined) {
      axios.get(`/api/${match.params.city}/${match.params.category}?min_price=${min_price}&max_price=${max_price}&display_type=${display_type}&order=${order}`)
      .then(function (response) {
        //console.log(match.params.city);
        self.setState({
          itemsData:response.data
        }, ()=>{
          //console.log(self.state.itemsData);
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    } else if(match.params.category != undefined && min_price == undefined) {
      axios.get(`/api/${match.params.city}/${match.params.category}`)
      .then(function (response) {
        //console.log(match.params.city);
        self.setState({
          itemsData:response.data
        }, ()=>{
          //console.log(self.state.itemsData);
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    }
}
  loopItems = () => {
    const {match, history} = this.props
    if(this.state.itemsData != undefined){
      return this.state.itemsData.map((item,i) => {

        return(
          <a href={`/${match.params.city}/${match.params.category}/${item.listing}/${item.id}`} className='details-box' key={i}>
            <div className='image' style={{"backgroundImage":`url("${item.images[0]}")`}}>
              <div className='price'>${item.price}</div>
            </div>
            <div className='details'>
              <i className="far fa-star"></i>
              <div className='title'>{item.title}</div>
              <div className='city'>{item.city}</div>
            </div>
          </a>
        )
      })
    }
  }
  vehiclesForSaleOptions = () => {
    const {match, history} = this.props
    if(match.params.listing == "cars-and-trucks"){
      return(
        <div className = "further-options">
          <div className='form-group manufacturer'>
            <label>Manufacturer</label>
            <select className='manufacturer' name='manufacturer' value={this.state.manufacturer} onChange = {this.changeController}>
              <option value='bmw'>BMW</option>
              <option value='subaru'>Subaru</option>
              <option value='nissan'>Nissan</option>
            </select>
          </div>
          <div className='form-group model'>
            <label>Model</label>
            <select className='model' name='model' value={this.state.model} onChange = {this.changeController}>
              <option value='bmw'>BMW</option>
            </select>
          </div>
        </div>
      )
    }
  }
  changeController = (event) =>{
    const name = event.target.name
    const value = (event.target.value == 'checkbox')? event.target.checked : event.target.value

    this.setState({
      [name]: value
    }, () =>{
      console.log(this.state)
    })
  }
  updateQueryParams = () => {
    const {match, history} = this.props
    const {min_price,max_price,display_type,order} = this.state
    document.location.href = `/${match.params.city}/${match.params.category}?min_price=${min_price}&max_price=${max_price}&display_type=${display_type}&order=${order}`
  }
  render () {
    return (
      <div id='listings-page'>
        <div className='container'>
          <section id='filter'>
            <div className='form-group price'>
              <label>Price</label>
              <div className='min-max'>
                <select className='min-price' name='min_price' value={this.state.min_price} onChange = {this.changeController}>
                  <option value='0'>0</option>
                  <option value='100'>100</option>
                  <option value='1000'>1000</option>
                  <option value='3000'>3000</option>
                </select>
                <select className='max-price' name='max_price' value={this.state.max_price} onChange = {this.changeController}>
                  <option value='5000'>5000</option>
                  <option value='10000'>10000</option>
                  <option value='15000'>15000</option>
                </select>
              </div>
            </div>
            {this.vehiclesForSaleOptions()}
            <div className='form-group button'>
              <div className='primary-btn' onClick={this.updateQueryParams}>Update</div>
              <div className='reset-btn'>Reset</div>
            </div>
          </section>
        </div>
          <section id='items-section'>
            <div className='container'>
            <section className='views'>
              <div className='form-group view-dropdown'>
                <select className='display-type'  name='display_type' value={this.state.display_type} onChange = {this.changeController}>
                  <option value='grid'>Grid</option>
                  <option value='list'>List</option>
                  <option value='thumb'>Thumbnail</option>
                </select>
              </div>
              <div className='form-group view-order'>
                <select className='order'  name='order' value={this.state.order} onChange = {this.changeController}>
                  <option value='newest'>newest</option>
                  <option value='price'>price</option>
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
