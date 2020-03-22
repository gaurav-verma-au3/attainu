import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../store";
import { BrowserRouter as Router, Route } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <div className="container-fluid mt-3" style={{ height: "80vh" }}>
        <div className="container-fluid bg-primary " style={{ height: "50%" }}>
          Deals Of the Day
        </div>
        <div className="container-fluid bg-success " style={{ height: "50%" }}>
          Top Selection
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps)(Home);
