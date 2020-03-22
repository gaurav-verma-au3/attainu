import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Login from './components/Login'
import * as serviceWorker from './serviceWorker';

const loggedIn = localStorage.getItem("user")


class Home extends Component {

    isLoggedin = () => {
        if (loggedIn) {
            return <Redirect to="/app/trending" />
        }
        return <Redirect to="/login" />
    }


    render() {
        return (
            <Router>
                <Route path="/app" component={App} />
                <Route path="/login" component={Login} />
                {this.isLoggedin()}
            </Router>
        );
    }
}

export default Home;



ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
