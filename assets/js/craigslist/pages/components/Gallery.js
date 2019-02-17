import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Gallery extends Component {
  constructor () {
    super()
    this.state = {
      images:'',
      currrentImage:'',
      currentIndex: 0
    }
  }
  componentWillMount(){
    this.setState({
      images:this.props.itemsData.images,

    },()=>{
      this.setState({
        currrentImage:images[0]
      })
    })
    // const images = [
    //   'https://images.craigslist.org/00j0j_3nVk4oaRe2y_600x450.jpg',
    //   'https://images.craigslist.org/00606_jQ06l0mT4Ni_600x450.jpg',
    //   "https://images.craigslist.org/00O0O_cPg8ebMwLLU_600x450.jpg",
    //   "https://images.craigslist.org/00808_cqsez9prYmw_600x450.jpg",
    //   "https://images.craigslist.org/00n0n_bd8hIoAiBHN_600x450.jpg",
    //   "https://images.craigslist.org/00i0i_fIn56yzQPXs_600x450.jpg"
    // ];
    // this.setState({
    //   images,
    //   currrentImage:images[0],
    // })
  }
  loopThumbnail = () =>{
    return this.state.images.map((item, i) =>{
      return(
        <div key= {i} onClick={this.thumbnailClick.bind(null, i)} style= {{"background":`url("${item}")`}} className='image'></div>
      )
    })
  }

  nextBtn = () => {
    if(this.state.currentIndex != (this.state.images.length - 1)){
      this.setState({
        currentIndex: this.state.currentIndex + 1
      })
    }
  }

  prevBtn = () => {
    if(this.state.currentIndex != 0){
      this.setState({
        currentIndex: this.state.currentIndex - 1
      })
    }
  }

  thumbnailClick = (index) =>{
    this.setState({
      currentIndex: index
    })
  }
  render () {
    const {match, location, history} = this.props

    return (
        <div className='gallery'>
          <div className='slider'>
            <div className='enlarged-image' style={{"background":`url("${this.state.images[this.state.currentIndex]}")`}}>
              <div className=' arrow' onClick={this.prevBtn}><i className="fas fa-angle-left"></i></div>
              <div className=' arrow' onClick={this.nextBtn}><i className="fas fa-angle-right"></i></div>
            </div>
          </div>
          <div className='thumbnails-box'>
            {this.loopThumbnail()}
          </div>
        </div>
    )
  }
}
