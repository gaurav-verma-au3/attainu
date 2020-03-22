import React, { Component } from "react";
import Postbox from "./Postbox";
import Commentbox from "./Commentbox";
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid bg-dark text-white">
          <div className="row">
            <div className="col-6">
              <Postbox />
            </div>
            <div className="col-6">
              <Commentbox />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
