import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import { Provider } from "react-redux";
import { store } from "./store";
import AddProduct from "./components/AddProduct";
import Profile from "./components/Profile";
const loggedIn = localStorage.getItem("user");
class App extends Component {
  isLoggedin = () => {
    if (loggedIn === null) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <Provider store={store}>
        <div className="container-fluid p-0">
          <Navbar />
          <Router>
            <Route exact path="/" component={Login} />
            <Route
              path="/home"
              render={routeProps => <Home {...routeProps} />}
            />
            <Route path="/addproduct" component={AddProduct} />
            <Route path="/profile" component={Profile} />
            {this.isLoggedin()}
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
