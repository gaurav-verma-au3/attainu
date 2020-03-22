import React from "react"
import { Component } from "react"
import QuestionTile from "../component/questionTile"
import QuestionNavigation from "../component/questionNavigation"
import Actions from "../component/actions"


class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="text-white bg-dark p-5 text-center ">JavaScript Quiz</h1>
                <QuestionTile />
                <QuestionNavigation />
                <Actions />
            </div>
        );
    }
}

export default Home;