import React from 'react';
import './App.css';
import Input from './component/Input'



const toCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * 5 / 9;
}

const toFahrenheit = (celsius) => {
  return (celsius * 9 / 5) + 32;
}

const convert = (value, convert) => {
  const input = parseFloat(value);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}


class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { value: '', scale: 'c' };
  }

  handleCelsiusChange(value) {
    this.setState({ scale: 'c', value });
  }

  handleFahrenheitChange(value) {
    this.setState({ scale: 'f', value });
  }

  render() {
    const scale = this.state.scale;
    const value = this.state.value;
    const celsius = scale === 'f' ? convert(value, toCelsius) : value;
    const fahrenheit = scale === 'c' ? convert(value, toFahrenheit) : value;

    return (
      <div className='main'>
        <h1
          className="tempText"
        >
          °C
          </h1>
        <Input
          scale="c"
          value={celsius}
          onChange={this.handleCelsiusChange} />
        <img src="https://i.ibb.co/W089n2T/loop-128.png" alt="loop-128" border="0" />
        <Input
          scale="f"
          value={fahrenheit}
          onChange={this.handleFahrenheitChange} />
        <h1
          className="tempText"
        >
          °F
          </h1>
      </div>
    );
  }
}


export default App;
