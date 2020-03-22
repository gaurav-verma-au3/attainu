import React, { Component } from 'react';
import Videos from "../components/Videos"
import {connect} from "react-redux"
import {mapStateToProps} from "../store"
class Search extends Component {
constructor(props){
    super(props)
    this.state = {
        key : ""
    }
}

handleChange = (e) => {
this.setState({
    key: e.target.value
})
}

dispatchSearch =() => {
this.props.dispatch({
    type: "SEARCH_VIDEOS",
    payload: this.state.key
})}

componentWillMount(){
    this.props.dispatch({
        type: "Search Videos"
    })
}

componentWillUnmount(){
    this.props.dispatch({
        type: "EMPTY_VIDEOS"
    })
}

    render() {
        return (
            <div>
    <div className="bg-dark container-fluid head text-white d-flex px-5 align-items-center mb-5"><h1>{this.props.title}</h1></div>
      
                <div className="container d-flex mx-auto" >
                <input className="form-control mr-1" onChange={this.handleChange} type="text" placeholder="search" />
<button className="btn btn-primary ml=1" onClick={this.dispatchSearch} >Search</button>
                </div>
                <Videos/>
            </div>

        );
    }
}

export default connect(mapStateToProps)(Search);