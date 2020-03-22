import React, { Component } from 'react';
import Review from "../component/review"
import Actions from "../component/actions"

class QuestionReview extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1 className="text-center w-100"> Review </h1>

                </div>
                <hr></hr>
                <div className="row">
                    <Review />
                </div>
                <hr className="mb-5"></hr>
                <Actions />
            </div>

        );
    }
}

export default QuestionReview;