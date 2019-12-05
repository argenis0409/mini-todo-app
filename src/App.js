import React, { Component } from 'react'
import Todo from './components/Todo';
import TodoList from './components/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
         <div className='col-10 mx-auto col-md-8 mt-4'>
           <h3 className='text-capitalized text-center'>Add Items Below</h3>
          <Todo />
          <TodoList />
         </div>
        </div>
      </div>


    )
  }
}

