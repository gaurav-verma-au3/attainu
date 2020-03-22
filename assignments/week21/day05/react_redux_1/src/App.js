import React, { Component } from "react";
import "./App.css";
import Button from "./component/Button";

import { connect } from "react-redux"
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentScore: 0
    }
  }
  render() {
    return (
      <div className="app">
        <div className=" calcBody">
          <div className="row mt-5">
            <div className="alert alert-success p-5 text-center mt-5 rounded-circle mx-auto  " role="alert">
              <b>{this.props.currentScore}</b>
            </div>
          </div>
          <div className="row m-2">
            <Button
              onClick={this.props.updateBonus}
              className="btn btn-lg btn-dark px-5 py-2 border border-dark w-100 mt-1"
              value="UPDATE_BONUS"
            />
            <Button
              onClick={this.props.levelCompleted}

              className="btn btn-lg btn-success border border-dark px-5 py-2  w-100 mt-1"
              value="LEVEL_COMPLETED"
            />
            <Button
              onClick={this.props.lifeLost}

              className="btn btn-lg btn-danger border border-dark px-5 py-2  w-100 mt-1"
              value="LIFE_LOST"
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentScore: state.currentScore
  }
}
const mapDispatchToProps = dispatch => {
  return {
    updateBonus: () => dispatch({ type: "UPDATE_BONUS", value: 100 }),
    levelCompleted: () => dispatch({
      type: "LEVEL_COMPLETED",
      value: 500
    }),
    lifeLost: () => dispatch({
      type: "LIFE_LOST",
      value: 250
    })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
