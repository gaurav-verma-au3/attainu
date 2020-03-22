import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
class Actions extends Component {
    render() {
        return (
            <div className="container mt-5  ">
                <div className="row">
                    <NavLink exact to="/"><button type="button" className="btn btn-info mr-1">Quiz</button></NavLink>
                    <NavLink exact to="/quiz/review"><button type="button" className="btn btn-info mr-1">Quiz Review</button></NavLink>
                    <NavLink exact to="/quiz/result"><button type="button" className="btn btn-info mr-1">Submit</button></NavLink>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentQuestion: state.currentQuestion
    }
}
const mapDispatchToProps = dispatch => {
    return {


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Actions);