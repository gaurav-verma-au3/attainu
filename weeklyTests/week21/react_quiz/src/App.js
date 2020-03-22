import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from "./pages/home"
import QuizReview from "./pages/quizReview"
import Result from "./pages/result"
import { connect } from "react-redux"



class App extends Component {


  render() {
    return (
      <Router>
        <div className="app">
          <div className="main">
            <Route exact path="/" component={Home} />
            <Route exact path="/quiz/review" component={QuizReview} />
            <Route exact path="/quiz/result" component={Result} />
          </div>
        </div>
      </Router>
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
