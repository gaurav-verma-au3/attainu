import React from 'react';
import './App.css';
import Button from './Button'
import Input from './Input'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Login</h2>
        <br />
        <Input />
        <Button class="btn-primary btn-sm" />
      </header>
    </div>
  );
}

export default App;
