import React, { Component } from 'react'
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList'
import uuid from 'uuid';
export default class App extends Component {
  state={
    items:[],
    id:uuid,
    item:'',
    editItem:false
  };
  handleChange=(e)=>{
  this.setState({
    item:e.target.value
  });
  };
  handleSubmit=(e)=>{
   e.preventDefault();
   const newItem={
     id:this.state.id,
     title:this.state.item
   }
   const updatedItems=[...this.state.items, newItem]
   this.setState({
     items:updatedItems,
     item:'',
     id:uuid(),
     editItem:false
   },()=>console.log(this.state))
  }
  clearList=()=>{
   this.setState({
     items:[]
   })
  }
  handleDelete=(id)=>{
   const filteredList=this.state.items.filter(item=>item.id != id)
   this.setState({
    items:filteredList
  })
  }
  handleEdit=(id)=>{
  const filteredList=this.state.items.filter(item=>item.id!==id)
  const selectedItem=this.state.items.find(item=>item.id===id)
  this.setState({
    items:filteredList,
    item:selectedItem.title,
    id:id,
    editItem:true
  })
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
