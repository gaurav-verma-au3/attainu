import React from 'react';



class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        const value = this.props.value;
        const scale = this.props.scale;
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <input className="form-control  text-center w-100" value={value}
                            onChange={this.handleChange} />
                    </div>
                </form>
            </div>

        );
    }
}

export default Input;