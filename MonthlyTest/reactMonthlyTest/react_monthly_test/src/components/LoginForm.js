// localStorage.setItem("user", JSON.stringify(user))

import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../store";
import { Redirect } from 'react-router-dom'
class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    let email = e.target.elements.email.value
    let password = e.target.elements.password.value

    this.props.users.forEach(user => {
      if (user) {
        if (user.email === email && user.password === password) {


          localStorage.setItem("user", JSON.stringify(user))
          window.location.reload(false);
        }
      }
    });

  }
  render() {
    return (
      <div
        className="container-fluid d-flex justify-content-center align-items-center "
        style={{ height: "80vh" }}
      >
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <h3>Login</h3>
            <hr />
            <form className="mt-3" onSubmit={e => this.handleSubmit(e)}>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  placeholder="email@example.com"
                />
              </div>
              <div class="form-group">
                <label >Password</label>
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps)(LoginForm);
