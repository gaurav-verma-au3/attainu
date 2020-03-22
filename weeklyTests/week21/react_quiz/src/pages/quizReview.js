import React, { Component } from 'react';
import IsAnswered from "../component/isAnswered"
import Actions from "../component/actions"

class QuizReview extends Component {
    render() {
        return (
            <div>
                <h1 className="text-white bg-dark p-5 text-center ">Quiz Review</h1>
                <div className="container mt-5">
                    <div className="row ">
                        <IsAnswered />
                    </div>
                    <hr></hr>
                    <Actions />
                </div>

            </div>

        );
    }
}

export default QuizReview;