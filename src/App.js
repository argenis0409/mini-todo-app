import React, { Component } from 'react'
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    edit: false
  }

  handleChange = e => {
    this.setState({ item: e.target.value });
  }

  handleSubmit = e => {
   e.preventDefault();

   const newItem = {
     id: this.state.id,
     title: this.state.item
   }

   const newItems = [...this.state.items,newItem]
   this.setState({
     items:newItems,
     item:'',
     id: uuid(),
     edit: false
   })
  }

  clearList = () => {
    this.setState({
      items:[]
    })
  }

  handleDelete = (id) => {
    const mapping = this.state.items.filter(item => item.id !== id)
    this.setState({
      items:mapping
    })
  }


  render() {
    return (
      <div className='container'>
        <div className='row'>
         <div className='col-10 mx-auto col-md-8 mt-4'>
           <h3 className='text-capitalized text-center'>Add New Items Below</h3>
          <Todo item={this.state.item}
           handleChange={this.handleChange}
           handleSubmit={this.handleSubmit}
          />
          <TodoList 
            items={this.state.items}
            clearList={this.clearList}
            handleDelete={this.handleDelete}
          />
         </div>
        </div>
      </div>


    )
  }
}

