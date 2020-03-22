import React, { Component } from 'react'

class Button extends Component {
    render() {
        return <button onClick={this.props.onClick} className={this.props.className} >{this.props.value}</button>
    }
}

export default Button;