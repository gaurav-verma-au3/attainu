import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../store'

class AddProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            catagory: null,
            name: null,
            description: null,
            image: null,
            highlights: [],
            price: null,
            discount: null,
            type: null,
            highlightsCounter: [0]
        }
    }

    incrementHighlights = () => {
        this.setState({ ...this.state, highlightsCounter: [...this.state.highlightsCounter, this.state.highlightsCounter.lenght] })
    }
    handleChange = (e, index) => {
        const { highlights } = this.state;
        highlights[index] = e.target.value

        if (e.target.name == 'highlights') this.setState({ ...this.state, highlights: highlights })
        else this.setState({ ...this.state, [e.target.name]: e.target.value })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch({ type: "ADD_PRODUCT", payload: this.state })
    }

    render() {

        return (
            <div
                className="container-fluid d-flex justify-content-center  align-items-center mt-4">
                <div className="row">
                    <div className="  col-md-12 col-sm-12  ">
                        <h3>Add Product</h3>
                        <hr />
                        <form class="mt-3 ">
                            <div className="form-group">
                                <input
                                    name="catagory"
                                    onChange={e => this.handleChange(e)}
                                    type="text"
                                    className="form-control"
                                    placeholder="Catagory" />
                            </div>
                            <div className="form-group">
                                <input
                                    name="name"
                                    onChange={e => this.handleChange(e)}
                                    type="text"
                                    className="form-control"
                                    placeholder="Name" />
                            </div>
                            <div className="form-group">

                                <input
                                    name="description"
                                    onChange={e => this.handleChange(e)}
                                    type="text"
                                    className="form-control"
                                    placeholder="Description" />
                            </div>
                            <div className="form-group">
                                <input
                                    name="image"
                                    onChange={e => this.handleChange(e)}
                                    type="text"
                                    className="form-control"
                                    placeholder="Image URL" />
                            </div>
                            {this.state.highlightsCounter.map((val, index) => {
                                return (index === this.state.highlightsCounter.length - 1
                                    ? <div className="form-group d-flex align-items-center">
                                        <input
                                            name={`highlights`}
                                            onChange={e => this.handleChange(e, index)}
                                            type="text"
                                            className="form-control mr-1"
                                            placeholder={`Highlight ${index + 1}`} />
                                        <strong
                                            onClick={this.incrementHighlights}
                                            style={{
                                                cursor: 'pointer'
                                            }}>+</strong>
                                    </div>

                                    : <div className="form-group">
                                        <input
                                            name={`highlights`}

                                            onChange={e => this.handleChange(e, index)}
                                            type="text"
                                            className="form-control"
                                            placeholder={`Highlight ${index + 1}`} />

                                    </div>)
                            })}

                            <div className="form-group">
                                <input
                                    name="price"
                                    onChange={e => this.handleChange(e)}
                                    type="text"
                                    className="form-control"
                                    placeholder="Price" />
                            </div>
                            <div className="form-group">
                                <input
                                    name="discount"
                                    onChange={e => this.handleChange(e)}
                                    type="text"
                                    className="form-control"
                                    placeholder="Discount in %" />
                            </div>
                            <input
                                className="form-check-input"
                                type="radio"
                                id="radio1"
                                name="type"
                                onChange={e => this.handleChange(e)}
                                value="Deals Of The Day" />
                            <label class="form-check-label" for="radio1">
                                <small>Deals Of the Day</small>
                            </label>
                            <input
                                className="form-check-input "
                                type="radio"
                                id="radio2"
                                onChange={e => this.handleChange(e)}
                                name="type"
                                value="Top Selections" />
                            <label class="form-check-label " for="radio2">Top Selections</label>
                            <button type="submit" onClick={e => this.handleSubmit(e)} className="d-block btn btn-primary">
                                Add Product
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(AddProduct)