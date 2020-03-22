import React, { Component } from 'react';
import { connect } from 'react-redux';




class ListTodo extends Component {



    render() {


        return (
            <div>
                <div className="list">
                    <div className=" container ">
                        {
                            this.props.toRender.map((val, index) => {
                                if (val.isDone === true) {
                                    return <div className="row" key={index}>
                                        <div className="col-8">
                                            <p className="text-white"><strike> {(index + 1) + " . )  " + (val.name)}</strike></p>
                                        </div>
                                        <div className="col-2">
                                            <button className="btn btn-sm btn-dark border-light" value={index} onClick={this.props.markDone} disabled={val.isDone} >Done</button>
                                        </div>
                                        <div className="col-2">
                                            <button className="btn btn-sm btn-dark border-light" value={index} onClick={this.props.delete} >Delete</button>
                                        </div>
                                    </div>
                                } else return <div className="row" key={index}>
                                    <div className="col-8">
                                        <p className=" text-white">{(index + 1) + " . )  " + (val.name)}</p>
                                    </div>
                                    <div className="col-2">
                                        <button className="btn btn-sm btn-dark border-light" value={index} onClick={this.props.markDone}>Done</button>
                                    </div>
                                    <div className="col-2">
                                        <button className="btn btn-sm btn-dark border-light" value={index} onClick={this.props.delete} >Delete</button>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        toRender: state.toRender,
        todos: state.todos,
        counter: state.counter,
        refresh: state.refresh
    }
}
const mapDispatchToProps = dispatch => {
    return {
        delete: (e) => dispatch({
            type: "DELETE",
            payload: e
        }),
        markDone: (e) => dispatch({
            type: "MARK_DONE",
            payload: e
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);

