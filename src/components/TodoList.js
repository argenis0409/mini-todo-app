import React, { Component } from 'react'
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
    render() {
        return (
          <ul className='list-group'>
              <h2 className='text-capitalize text-center'>Todo List Below</h2>
              <TodoItem />
              
              <button type='button' className='btn btn-outline-danger btn-block text-capitalize mt-3'>Delete All</button>
          </ul>
        )
    }
}

