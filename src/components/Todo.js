import React, { Component } from 'react';

export default class Todo extends Component {

    render() {
        const {item, handleChange, handleSubmit, edit} = this.props;
        return (
        <div className='card card-body my-3'>
           <form onSubmit={handleSubmit}>
               <div className='input-group'>
                <div className='input-group-prepend'>
                <div className='input-group-text bg-primary text-white'>
                <i className='fas fa-clipboard-list'></i>
                </div>
                </div>
                <input type='text' className='form-control' placeholder='add item here' value={item} onChange={handleChange} />
               <button type='submit' className={edit ? 'btn btn-outline-success' : 'btn btn-outline-primary'}>{edit ? 'editing item' : 'add item'}</button>
               </div>
           </form>
        </div>
        )
    }
}
