import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      categoriesData:''
    }
  }

  componentDidMount(){
    const {match, history} = this.props
    if(match.params.city == undefined){
      history.push('/ottawa')
    }
    const self = this;
    axios.get(`/api/${match.params.city}`)
    .then(function (response) {
      self.setState({
        categoriesData:response.data
      }, ()=>{
        console.log(self.state.categoriesData);
      })
    })
    .catch(function (error) {
      console.log(error);
    });

    axios.get(`/api/trending`)
    .then(function (response) {
      self.setState({
        trendingTagsData:response.data
      }, ()=>{
        console.log(self.state);
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  loopCategories = () =>{
    const {match, history} = this.props
    if(this.state.categoriesData != ''){
      return this.state.categoriesData.map((category,i)=>{
        const loopListing = () => {
          return category.listings.map((listing,i)=>{
            return(
              <Link to={`/${match.params.city}/${category.title}/${listing.slug}`}
              key={i}>{listing.name}</Link>
            )
          })
        }
        return(
          <div className='category' key = {i}>
            <a href={`${match.params.city}/${category.title}`} className='title'>{category.title}</a>
            <div className='links'>
              {loopListing()}
            </div>
          </div>
        )
      })
    }
    else{
        return <h1>loading loading loading loading loading loading</h1>
    }
  }
  loopTags = () =>{
    if(this.state.trendingTagsData != undefined){
      return this.state.trendingTagsData.map((item,i)=>{
          return(
            <div className='tag' key={i}>{item.name}</div>
          )
        })
    }
  }
  render () {
    return (
      <div id='home'>
        <h1> Connecting People <br /> Everywhere </h1>
        <div className='container'>
          <section className='link-section'>
            {this.loopCategories()}
          </section>
        </div>
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
