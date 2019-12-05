import React, { Component } from 'react'
import Todo from './components/Todo';
import TodoList from './components/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends Component {
  state = {
    items: [],
    id: 0,
    item: '',
    edit: false
  }

  handleChange = e => {
    this.setState({ item: e.target.value });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
         <div className='col-10 mx-auto col-md-8 mt-4'>
           <h3 className='text-capitalized text-center'>Add New Items Below</h3>
          <Todo item={this.state.item} handleChange={this.handleChange} />
          <TodoList />
         </div>
        </div>
      </div>


    )
  }
}

