import React, { Component } from 'react'
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList'

export default class App extends Component {
  render() {
    return (
      <div>
          <div className="container">
          <div className="row"> 
          <ToDoInput/>
          <ToDoList/>         
          </div>
          </div>
      </div>
    )
  }
}
