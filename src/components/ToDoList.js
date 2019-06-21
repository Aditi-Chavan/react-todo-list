import React, { Component } from 'react'
import Item from './ToDoItem'
import ToDoItem from './ToDoItem';
export default class ToDoList extends Component {
    render() {
        const {items,clearList,handleDelete,handleEdit}=this.props;
        return (
           <ul className="list-group my-5">
            <h3 className="text-capitalize text-center"> todo list</h3>
            {
                items.map(item=>{
                    return(
                        <ToDoItem
                        key={item.id}
                        title={item.title}
                        handleDelete={()=>handleDelete(item.id)}
                        handleEdit={()=>handleEdit(item.id)}
                        />
                    )
                })
            }
            <button type="button" className="text-uppercase btn btn-danger btn-block mt-5" onClick={clearList}>Clear List</button>
           </ul>
        )
    }
}
