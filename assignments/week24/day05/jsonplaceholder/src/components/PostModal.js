import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { mapStateToProps } from "../store/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class PostModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStatus: false,
      postBody: {
        title: "",
        body: "",
        userId: 1
      }
    };
  }

  handleChange = e => {
    let currentUserId =
      this.props.selectedUser[0] === "all" ? 1 : this.props.selectedUser[0];
    if (e.target.nodeName === "INPUT") {
      this.setState({
        ...this.state,
        postBody: {
          ...this.state.postBody,
          title: e.target.value,
          userId: currentUserId
        }
      });
    }

    if (e.target.nodeName === "TEXTAREA") {
      this.setState({
        ...this.state,
        postBody: {
          ...this.state.postBody,
          body: e.target.value,
          userId: currentUserId
        }
      });
    }
    console.log(this.state.postBody);
  };

  createPost = () => {
    this.setState({ ...this.state, modalStatus: !this.state.modalStatus });

    this.props.dispatch({
      type: "CREATE_POST",
      payload: this.state.postBody
    });
  };

  toggleModal = () => {
    this.setState({ ...this.state, modalStatus: !this.state.modalStatus });
  };
  render() {
    return (
      <div>
        <div className="container-fluid d-flex">
          <button
            className="btn btn-primary p-3  ml-auto rounded-circle"
            onClick={this.toggleModal}
          >
            <FontAwesomeIcon icon={faPlus} style={{ fontSize: "1.5rem" }} />
          </button>
        </div>
        <Modal show={this.state.modalStatus}>
          <div className="container-fluid d-flex align-items-center mt-3 ">
            <h3 className="p-0 m-0 pl-3">Create new Post</h3>
            <button
              className="btn btn-danger  ml-auto rounded-circle"
              onClick={this.toggleModal}
            >
              <strong>X</strong>
            </button>
          </div>
          <div class="container px-5 py-5 ">
            <div class="form-group">
              <label>Title</label>
              <input
                onChange={this.handleChange}
                type="text"
                class="form-control"
                placeholder="Enter Post title ..."
              />
            </div>
            <div class="form-group">
              <label>Body</label>
              <textarea
                onChange={this.handleChange}
                type="text"
                class="form-control"
                placeholder="Enter Post body ..."
              />
            </div>

            <button class="btn btn-primary" onClick={this.createPost}>
              Post
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps)(PostModal);
