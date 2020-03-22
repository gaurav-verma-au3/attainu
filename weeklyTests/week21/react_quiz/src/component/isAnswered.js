import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'


class IsAnswered extends Component {
    isAnswered = (index, answers) => {
        if (answers[index]) {
            return true
        }
        return false
    }

    render() {
        return (
            <div className="row">
                <div className="d-flex" style={{ width: "1000%" }}>
                    {this.props.questions.map((val, index) => {
                        return <NavLink
                            to="/"
                            onClick={(e) => this.props.jumpToQuestion(index)}
                            className={this.isAnswered(index, this.props.answers) ? "alert alert-success w-100" : "alert alert-warning w-100"}
                            role="alert"><p>Question No  {index + 1}</p><p><strong> {this.isAnswered(index, this.props.answers) ? "Answered" : "Not Answered"}</strong></p> </NavLink>
                    }
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        questions: state.questions,
        counter: state.counter,
        answers: state.answers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        jumpToQuestion: (index) => dispatch({ type: "JUMP_TO_QUESTION", index: index })


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IsAnswered);