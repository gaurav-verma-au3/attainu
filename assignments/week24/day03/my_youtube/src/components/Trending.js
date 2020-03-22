import React, { Component } from "react";
import Videos from "./Videos";
import { connect } from "react-redux";
import { mapStateToProps } from "../store/index";

class Trending extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "Trending Videos"
    });

    this.props.dispatch({
      type: "FETCH_TRENDING"
    });
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: "EMPTY_VIDEOS"
    });
  }

  render() {
    return (
      <div>
        <div className="bg-dark container-fluid head text-white d-flex px-5 align-items-center mb-5 ">
          <h1>{this.props.title}</h1>
        </div>

        <Videos />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Trending);
