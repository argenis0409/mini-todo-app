import React, { Component } from 'react'
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
    render() {
        const { items, clearList, handleDelete } = this.props;
        return (
          <ul className='list-group'>
              <h2 className='text-capitalize text-center'>I Want To...</h2>
              {
                  items.map(item => {
                      return(
                     <TodoItem key={item.id} title={item.title}
                     handleDelete={()=> handleDelete(item.id)}
                     />
                      )
                  })
              }
              
              <button type='button' className='btn btn-outline-danger btn-block text-capitalize mt-3' onClick={clearList}>Delete All</button>
          </ul>
        )
    }
}

