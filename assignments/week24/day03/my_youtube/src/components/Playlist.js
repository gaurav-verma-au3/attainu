import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../store/index";

export class Playlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: ""
    };
  }

  componentDidMount() {
    this.props.dispatch({
      type: "Create Playlist"
    });
  }

  handleOnChange = e => {
    let key = e.target.name;

    this.setState({
      [key]: e.target.value
    });

    console.log(this.state);
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.dispatch({
      type: "CREATE_PLAYLIST",
      payload: {
        snippet: {
          title: this.state.title,
          description: this.state.description
        }
      }
    });
  };

  render() {
    return (
      <div>
        <div className="bg-dark container-fluid head text-white d-flex px-5 align-items-center mb-5">
          <h1>{this.props.title}</h1>
        </div>

        <div className="container d-flex mx-auto">
          <form className="w-75" onSubmit={this.handleOnSubmit}>
            <div className="form-group">
              <label for="title">Playlist Title</label>
              <input
                onChange={this.handleOnChange}
                type="text"
                className="form-control"
                name="title"
              />
            </div>

            <div className="form-group">
              <label for="description">Playlist Description</label>
              <textarea
                onChange={this.handleOnChange}
                className="form-control"
                name="description"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-sm">
              Create
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Playlist);
