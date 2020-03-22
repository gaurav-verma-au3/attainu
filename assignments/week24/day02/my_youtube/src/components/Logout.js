import React, { Component } from "react";

class Logout extends Component {
  logout = () => {
    localStorage.clear();
  };
  render() {
    return (
      <div>
        logout
        {this.logout()}
      </div>
    );
  }
}

export default Logout;
