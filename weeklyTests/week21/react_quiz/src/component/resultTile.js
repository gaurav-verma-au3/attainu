
import React, { Component } from 'react';
import { connect } from 'react-redux';



class ResultTile extends Component {


    isCorrect(options, answers, index) {
        let i
        options.map((value, index1) => {
            if (value.isAnswer === true)
                i = index1
            return null
        })
        if (options[i].name === answers[index]) return true
        else return false
    }

    getAnswer(options) {
        let answer
        options.map((val, index) => {
            if (val.isAnswer === true) {
                answer = options[index].name
            }
            return null
        })

        return answer
    }


    render() {
        let key = 0

        return (
            this.props.questions.map((question, index) => {
                return (
                    <div
                        key={question.id - 1000}
                        className={this.isCorrect(question.options, this.props.answers, index) ? "alert alert-success mx-auto px-4 py-1 w-100 " : "alert alert-danger mx-auto px-4 py-1  w-100"}
                        role="alert">
                        <p className="font-weight-bold" > <strong> Q{question.id - 1000}.</strong> {question.name} </p>
                        <div className="container">
                            <div className="row">
                                <form className=" ">
                                    {question.options.map((option) => {
                                        return <div
                                            key={key++}
                                            className="form-check">
                                            <input
                                                className="form-check-input key"
                                                type="radio"
                                                checked={option.name === this.props.answers[index]}
                                                disabled />
                                            <label
                                                className="form-check-label">
                                                {option.name}
                                            </label>
                                        </div>
                                    })
                                    }
                                </form>
                            </div>
                        </div>

                        <div className="alert alert-dark p-1 mt-3 mb-2 w-100" role="alert">
                            Right answer is : <strong>{this.getAnswer(question.options)}</strong>
                        </div>

                    </div>
                )
            }
            )
        );
    }
}

const mapStateToProps = state => {
    return {
        answers: state.answers,
        questions: state.questions

    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateBonus: () => dispatch({ type: "UPDATE_BONUS", value: 100 }),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ResultTile);


