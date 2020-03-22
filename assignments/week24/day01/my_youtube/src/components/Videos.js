import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {mapStateToProps} from '../store/index'
import "./Videos.css"
const link = "/app/player/"

class Videos extends Component {

  composeUrl(link, a,b,c){
    if (a===undefined) {return link+b+"/"+c } return link+a+"/"+c
  }
    render() {
        return ( <div className="card-group video-card ml-4">
   {this.props.videos.map(val=>{
    console.log(val.snippet.title)
return (<Link key={val.id.videoId} to={this.composeUrl(link,val.id.videoId,val.id,val.snippet.title)} >
<div className="card m-3">
    <img className="card-img-top" width="200px" height="180px" src={val.snippet.thumbnails.medium.url} alt="video thumbnail"/>
    <div className="card-body"><div className="details">
    <h5 className="card-title" width="200px" >{val.snippet.title}</h5>
      <p className="card-text">{val.snippet.channelTitle}</p>
    
    </div>

    </div>
  </div>
</Link>)
})}
</div>



           
        )
    }
}


export default connect(mapStateToProps)( Videos);
