import React, { Component } from 'react';
import { connect } from 'react-redux';




class Filter extends Component {



    render() {


        return (

            <div className=" container d-flex flex-row-reverse mb-5 ">
                <button className="btn btn-sm btn-secondary px-3 mr-2 " onClick={this.props.showCompleted} >Completed</button>
                <button className="btn btn-sm btn-secondary px-3 mr-2  " onClick={this.props.showPending} >Pending</button>
                <button className="btn btn-sm btn-secondary px-3 mr-2  " onClick={this.props.showAll} >All</button>

            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         toRender: state.toRender,
//         todos: state.todos,
//         counter: state.counter,
//         refresh: state.refresh
//     }
// }
const mapDispatchToProps = dispatch => {
    return {

        showCompleted: () => dispatch({
            type: "SHOW_COMPLETED"
        }),
        showPending: () => dispatch({
            type: "SHOW_PENDING"

        }),
        showAll: () => dispatch({
            type: "SHOW_ALL"
        })
    }
}


export default connect(null, mapDispatchToProps)(Filter);

