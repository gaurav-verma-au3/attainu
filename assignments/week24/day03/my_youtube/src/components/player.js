import React, { Component } from 'react'
import {connect} from 'react-redux'
import {mapStateToProps} from '../store/index'
import "./player.css"



class Player extends Component {
    videoId = `${this.props.match.params.videoId}`
videoTitle = `${this.props.match.params.videoTitle}`
    watchUrl = `https://www.youtube.com/embed/${this.videoId}`
componentDidMount(){


    this.props.dispatch({
        type: "FETCH_COMMENTS",
payload: `${this.videoId}`
    })

    this.props.dispatch({
        type: "PLAY_VIDEO",
        payload: `${this.videoTitle}` 
    })
}
 render(){
return <div>
    <div className="bg-dark container-fluid head text-white d-flex px-5 align-items-center mb-5"><h1>{this.props.title}</h1></div>

    <div className="container-fluid">
        <div className="row">
            <div className="col-8">
            <iframe className="player" src={this.watchUrl}  frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Player" ></iframe>

            </div>
            <div className="col-4">
            <div className="alert alert-dark m-auto p-auto w-100" role="alert">
 <strong> Comments</strong>
 {this.props.comments.map(
     (val) => {
         return <div key={val.snippet.topLevelComment.id} >
             <div className="alert alert-secondary" role="alert">
             <div className="d-flex align-items-center">
                 <img className="rounded-circle mr-2" height="30px" width="30px" src={val.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="usr_img"/>
             <strong>{val.snippet.topLevelComment.snippet.authorDisplayName}</strong>
             
             </div>
             <p className="mt-3">
{val.snippet.topLevelComment.snippet.textDisplay}
             </p>
</div>

         </div>
     }
 )}
</div>
            </div>

        </div>
    </div>

    </div>
    }
}


export default connect(mapStateToProps)(Player) ;

