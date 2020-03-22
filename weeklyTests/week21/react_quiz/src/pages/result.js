import React, { Component } from 'react';
import ResultTile from "../component/resultTile"
class Result extends Component {

    render() {
        return (

            <div >
                <h1 className="text-white bg-dark p-3 text-center ">Quiz Review</h1>

                <div className="container mt-5">
                    <div className="row w-100">
                        <ResultTile />
                    </div>
                    <hr></hr>
                </div>
            </div>
        );
    }
}

export default Result;