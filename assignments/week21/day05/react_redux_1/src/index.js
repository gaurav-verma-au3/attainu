import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux"
import App from './App';
import { createStore } from 'redux';
import reducer from './redux/reducer'

let store = createStore(reducer);



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
