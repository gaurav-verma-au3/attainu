import React, { Component } from 'react';
import { connect } from 'react-redux';



class AddTodo extends Component {

    state = {

        todo: ""
    }

    handleInputChange = (e) => {

        this.setState({ todo: e.target.value })

    }

    render() {
        return (
            <div className="container">
                <h1 className=" title text-center p-2 mb-5 text-white">Lets do it...</h1>

                <div className="bg-dark d-flex justify-content-center">
                    <div className="form-group d-flex">
                        <input className=" add-input  text-white simplebox bg-dark mr-1  form-control form-control-lg " ref="payload" onChange={this.handleInputChange} name="todoBox" type="text" />
                        <button className=" add-btn btn btn-dark btn-lg circuler ml-1  px-4 border" value={this.state.todo} onClick={this.props.addTodo}>ADD</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        refresh: state.refresh
    }
}

const mapDispatchToProps = dispatch => {
    return {

        addTodo: (e) => dispatch({
            type: "ADD",
            payload: e.target.value
        })

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);


