import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../store/index";

class Commentbox extends Component {
  render() {
    return (
      <div className="container-fluid mt-5">
        <div
          href="#"
          className="alert alert-dark m-0 rounded-0 w-75  "
          data-toggle="collapse"
          data-target="#commentList"
          aria-expanded="false"
          aria-controls="commentList"
        >
          Toggle Comments
        </div>
        <div className="container-fluid" id="commentList">
          {this.props.comments.map(comment => {
            return (
              <div className="container mt-2" key={comment.id}>
                <div className="alert alert-primary" role="alert">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-2">
                        <h6>Name: </h6>
                      </div>
                      <div className="col-10">
                        <h6> {comment.name}</h6>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-2">
                        <h6>Comment:</h6>
                      </div>
                      <div className="col-10">
                        <p> {comment.body}</p>
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

export default connect(mapStateToProps)(Commentbox);
