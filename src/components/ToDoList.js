import React, { Component } from 'react'
import Item from './ToDoItem'
export default class ToDoList extends Component {
    render() {
        return (
            <section>
                <h2>To Do List</h2>
                <Item />
            </section>
        )
    }
}
