import React, { Component } from 'react'
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList'
import uuid from 'uuid';
export default class App extends Component {
  state={
    items:[{id:1,title:"Wake Up"},{id:2,title:"Make Breakfast"},{id:3,title:"make lunch"}],
    id:uuid,
    item:'',
    EditItem:false
  };
  handleChange=(e)=>{
    console.log("hello");
  }
  handleSubmit=(e)=>{
    console.log("submit");
  }
  clearList=()=>{
    console.log("Clear List");
  }
  handleDelete=(id)=>{
    console.log(`handle delete ${id}`);
  }
  handleEdit=(id)=>{
    console.log(`handle Edit ${id}`);
  }
  render() {
    console.log(this.state)
    return (
      <div>
          <div className="container">
          <div className="row"> 
          <div className="col-10 mx-auto col-md-8 mt-5">
          <h3 className="text-capitalize text-center"> 
            To Do Input
          </h3>
          <ToDoInput
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          editItem={this.state.editItem} />
          <ToDoList
          items={this.state.items}
          clearList={this.clearList}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          />     
          </div>
            
          </div>
          </div>
      </div>
    )
  }
}
