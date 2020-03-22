// localStorage.setItem("user", JSON.stringify(user))

import React, { Component } from "react";
import LoginForm from "./LoginForm";
import Signup from "./Signup";
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import { mapStateToProps } from "../store";
const loggedIn = localStorage.getItem("user");

class Login extends Component {


  render() {

    return (

      <div>
        {loggedIn ? <Redirect to="/home" /> : <div className="containet-fluid d-flex align-items-center justify-content-center">
          <div className="row mt-2 border">
            <div className="col-md-6 col-sm-12 border-right ">
              <LoginForm />
            </div>
            <div className="col-md-6 col-sm-12  ">
              <Signup />
            </div>
          </div>
        </div>
        }
      </div>
    );
  }
}
export default connect(mapStateToProps)(Login);
