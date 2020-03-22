import React, { Component } from 'react';
import AddTodo from './components/AddTodo'
import ListTodo from './components/ListTodo'

import Filter from "./components/Filter"
class App extends Component {
    render() {
        return (


            <div className="bg-dark app" >
                <AddTodo />
                <Filter />
                <ListTodo />
            </div>


        );
    }
}

export default App;
