import React, { Component } from "react";
import "./App.css";
import Button from "./component/Button";
import Input from "./component/Input";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: "",
      result: 0,
      operator: ""
    };
  }

  firstInput = e => {
    this.setState({
      num1: e.target.value
    });
  };

  secondInput = e => {
    this.setState({
      num2: e.target.value
    });
  };

  calculate(operator) {
    if (operator === "+")
      this.setState({
        result: parseFloat(this.state.num1) + parseFloat(this.state.num2), operator: operator

      });
    else if (operator === "-")
      this.setState({
        result: parseFloat(this.state.num1) - parseFloat(this.state.num2), operator: operator
      });
    else if (operator === "*")
      this.setState({
        result: parseFloat(this.state.num1) * parseFloat(this.state.num2), operator: operator
      });
    else if (operator === "/")
      this.setState({
        result: parseFloat(this.state.num1) / parseFloat(this.state.num2), operator: operator
      });
  }

  clear = e => {
    this.setState({
      num1: "",
      num2: "",
      result: 0,
operator: ""
    });
  };

  render() {
    return (
      <div className="app">
        <div className=" calcBody">
          <div className="row m-2">
            <Input
              className='form-control w-25  ml-auto mr-auto'
              onChange={this.firstInput}
              value={this.state.num1} />
            <Button
              className="btn btn-light" value={this.state.operator}></Button>
            <Input
              className='form-control w-25 ml-auto mr-auto'

              onChange={this.secondInput}
              value={this.state.num2} />
          </div>
          <div className="row m-2">
            <div className="alert alert-success w-100 text-center" role="alert">
              {this.state.result}
            </div>
          </div>
          <div className="row m-2">
            <Button
              className="btn btn-warning px-5 py-2 border border-dark w-50"
              onClick={() => this.calculate("+")}
              value="+"
            />
            <Button
              className="btn btn-lg btn-warning border border-dark px-5 py-2  w-50"
              onClick={() => this.calculate("-")}
              value="-"
            />
          </div>
          <div className="row m-2">
            <Button
              className="btn btn-lg btn-warning border border-dark px-5 py-2  w-50"


              onClick={() => this.calculate("*")}
              value="*"
            />
            <Button
              className="btn btn-lg btn-warning border border-dark px-5 py-2  w-50"


              onClick={() => this.calculate("/")}
              value="/"
            />
          </div>
          <div className="row m-2">
            <Button
              className="btn btn-lg btn-danger px-5 py-2 mt-2 w-100"

              onClick={this.clear}
              value="Clear"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
