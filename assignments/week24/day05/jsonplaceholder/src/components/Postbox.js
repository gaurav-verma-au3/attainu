import React, { Component } from "react";
import PostModal from "./PostModal";
import { connect } from "react-redux";
import { mapStateToProps } from "../store/index";

class Postbox extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_USERS"
    });
    this.props.dispatch({
      type: "FETCH_POSTS"
    });
  }

  updateSelectedUser = id => {
    this.props.dispatch({
      type: "UPDATE_SELECTED_USER",
      payload: id
    });
  };
  fetchComments = id => {
    this.props.dispatch({
      type: "FETCH_COMMENTS",
      payload: id
    });
  };

  createPost = () => {
    this.props.dispatch({
      type: "CREATE_POST",
      payload: this.state
    });
  };

  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <PostModal />

          <div
            href="#"
            className="alert alert-dark  rounded-0 w-50 ml-3 m-0"
            data-toggle="collapse"
            data-target="#userList"
            aria-expanded="false"
            aria-controls="userList"
          >
            {this.props.users[this.props.selectedUser - 1]
              ? this.props.users[this.props.selectedUser - 1].name
              : "Sowing All Post Select a User "}
          </div>

          <button
            onClick={() => this.updateSelectedUser("all")}
            className="btn btn-secondary py-3  px-3  ml-auto "
          >
            Show All Posts
          </button>
        </div>
        <div
          className=" mt-2 w-100 collapse "
          id="userList"
          data-toggle="collapse"
          data-target="#userList"
        >
          {this.props.users.map(user => {
            return (
              <div
                key={user.id}
                value={user.id}
                className="alert alert-dark m-0 rounded-0"
                onClick={() => this.updateSelectedUser(user.id)}
              >
                <div className="container-fluid">
                  <div className="row  ">
                    <div className="col-1 d-flex align-items-center ">
                      <img
                        src="https://res.cloudinary.com/degnified/image/upload/c_scale,h_20,q_71,w_20/v1567952914/userDefault_j68meb.png"
                        alt="avatar"
                      />
                    </div>
                    <div className="col-5">
                      <h5 className="m-0 p-0">{user.name}</h5>
                      <p className="m-0 p-0">
                        <strong>@</strong>
                        {user.username}
                      </p>
                    </div>
                    <div className="col-5 text-right">
                      <p className=" m-0 p-0 font-weight-light">{user.email}</p>
                      <p className=" m-0 p-0 font-weight-light">{user.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="container-fluid ">
          {this.props.selectedUser[0] === "all"
            ? this.props.posts.map(post => {
                return (
                  <div className="container mt-2" key={post.id}>
                    <div className="alert alert-primary" role="alert">
                      <div className="d-flex">
                        <a className="alert-link " href="#">
                          {this.props.users[post.userId - 1].name}
                        </a>
                      </div>
                      <hr />
                      <div
                        className="container-fluid"
                        onClick={() => this.fetchComments(post.id)}
                      >
                        <div className="row">
                          <div className="col-2">
                            <h6>Tilte: </h6>
                          </div>
                          <div className="col-10">
                            <h6> {post.title}</h6>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-2">
                            <h6>Body:</h6>
                          </div>
                          <div className="col-10">
                            <p> {post.body}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : this.props.posts.map(post => {
                return (
                  <div className="container mt-2" key={post.id}>
                    <div className="alert alert-primary" role="alert">
                      <div className="d-flex">
                        <a className="alert-link " href="#">
                          {
                            this.props.users[this.props.selectedUser[0] - 1]
                              .name
                          }
                        </a>
                      </div>
                      <hr />
                      <div
                        className="container-fluid"
                        onClick={() => this.fetchComments(post.id)}
                      >
                        <div className="row">
                          <div className="col-2">
                            <h6>Tilte: </h6>
                          </div>
                          <div className="col-10">
                            <h6> {post.title}</h6>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-2">
                            <h6>Body:</h6>
                          </div>
                          <div className="col-10">
                            <p> {post.body}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps)(Postbox);
