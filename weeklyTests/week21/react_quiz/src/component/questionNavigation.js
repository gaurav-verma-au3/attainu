import React from 'react';
import { connect } from 'react-redux';



class QuestionNavigation extends React.Component {
    isFirst(val) {
        if (val === 0) return true
    }

    isLast(val) {
        if (val === 9) return true
    }

    render() {
        return (
            <div className="container mt-2">
                <hr></hr>
                <div className="row justify-content-center">
                    <button onClick={this.props.jumpToFirst} className="btn btn-sm btn-primary m-2" disabled={this.isFirst(this.props.counter)}>First</button>
                    <button onClick={this.props.prev} className="btn btn-sm btn-primary m-2" disabled={this.isFirst(this.props.counter)} >Prev</button>
                    <button onClick={this.props.next} className="btn btn-sm btn-primary m-2" disabled={this.isLast(this.props.counter)} >Next</button>
                    <button onClick={this.props.jumpToLast} className="btn btn-sm btn-primary m-2" disabled={this.isLast(this.props.counter)} >Last</button>
                </div>
                <hr></hr>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        jumpToFirst: () => dispatch({ type: "JUMP_TO_FIRST" }),
        jumpToLast: () => dispatch({ type: "JUMP_TO_LAST" }),
        prev: () => dispatch({ type: "PREV" }),
        next: () => dispatch({ type: "NEXT" }),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuestionNavigation);