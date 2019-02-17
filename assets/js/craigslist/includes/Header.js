import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      selectCityMenu: false,
      cityData:[],
      selectedCity:'Ottawa'
    }
  }
  componentWillMount(){
    const self = this;
    const {match, history} = self.props
    axios.get(`/api/cities`)
    .then(function (response) {
      self.setState({
        cityData:response.data
      }, ()=>{
        //console.log(self.state.cityData);
        let filteredCity = self.state.cityData.filter((item) => {
          return item.slug == match.params.city
        })
        self.setState({
          selectedCity:filteredCity[0].title
        })
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  viewDropdown = () => {
    this.setState({
      selectCityMenu:!this.state.selectCityMenu
    })
  }
  selectCity = (city) =>{
    this.setState({
      selectedCity:city
    },() => {
      const {match, history} = this.props
      let filteredCity = this.state.cityData.filter((item)=>{
        return item.title == this.state.selectedCity
      })

      history.push(`${filteredCity[0].slug}`)
    })
  }
  loopCities = () =>{
    return this.state.cityData.map((item,i)=>{
      return(
        <li key={i} onClick = {this.selectCity.bind(null,item.title)}>{item.title}</li>
      )
    })
  }
  render () {
    return (
      <div className='container'>
        <header>
          <div className="left-menu">
            <div className="logo">Craigslist</div>
            <div className="city" onClick={this.viewDropdown}>{this.state.selectedCity}
              <i className={`${(this.state.selectCityMenu) ? "fas fa-chevron-up" : "fas fa-chevron-down"}`}></i>
              <div className={`city-dropdown ${(this.state.selectCityMenu) ? "active" : ""}`}>
                <ul>
                  {this.loopCities()}
                </ul>
              </div>
            </div>
          </div>
          <div className="right-menu">
            <div className="user-img"><i className="far fa-user"></i></div>
            <div className="account">My account <i className="fas fa-chevron-down"></i></div>
            <div className="post-btn">Post to classifieds</div>
          </div>
        </header>
      </div>
    )
  }
}
