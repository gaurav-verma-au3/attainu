import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import './login.css'

class Login extends Component {

    handleSuccess = (response) => {
        let user = {
            name: response.profileObj.name
        }
        localStorage.setItem("user", JSON.stringify(user))
        this.props.history.push("/app")
    }


    render() {
        return (
            <div id="login" className="container">
                <h2  >Login using your Google Account </h2>
                <GoogleLogin
                    clientId="397366711230-tpl6anbjdftu6aojjtta781bd1m5asgk.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.handleSuccess}
                    onFailure={this.handleSuccess}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        );
    }
}

export default Login;