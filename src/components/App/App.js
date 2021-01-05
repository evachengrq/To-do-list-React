import './App.css';
import Header from '../header/Header'
import Input from '../input/Input'
import Footer from '../footer/Footer'
import TodoList from '../todo-list/TodoList'
import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from "react-redux"

function App() {
  const todoItems = useSelector(state => state)
  const [completionStatus, setCompletionStatus] = useState('All')

  const dispatch = useDispatch()

  const addItem = (input) => {
    dispatch({ 
      type: 'add_item',
      payload: input
    })
  }

  const updateItem = (editedItem) => {
    dispatch({
      type: 'update_item',
      payload: editedItem
    })
  }

  const deleteItem = (id) => {
    dispatch({
      type: 'delete_item',
      payload: id
    })
  }

  const setItemCompleted = (completedItem) => {
    dispatch({
      type: 'update_item',
      payload: completedItem
    })
  }

  const handleSelectAll = () => {
    const activeItems = todoItems.filter(item => !item.isCompleted)
    if (activeItems.length > 0) {
      dispatch({
        type: 'set_all',
        payload: true
      })
    } else {
      dispatch({
        type: 'set_all',
        payload: false
      })
    }
  }

  const deleteAllCompleted = () => {
    dispatch({
      type: 'clear_completed',
    })
  }

  const showItemsByStatus = (status) => {
    setCompletionStatus(status)
  }

  const filteredItems = () => {
    let filteredItems
    if (completionStatus === "active") {
      filteredItems = todoItems.filter(item => !item.isCompleted)
    } else if (completionStatus === "completed") {
      filteredItems = todoItems.filter(item => item.isCompleted)
    } else {
      filteredItems = todoItems
    }
    return filteredItems;
  }

  

  return (
    <div className="App">
      <Header/>
      <Input handleSubmit={addItem} itemLength={todoItems.length} handleSelectAll={handleSelectAll}/>
      <TodoList todoItems={filteredItems()} handleEdit={updateItem} handleDelete={deleteItem} handleComplete={setItemCompleted}/>
      <Footer showItemsByStatus={showItemsByStatus} completionStatus={completionStatus} deleteAllCompleted={deleteAllCompleted} todoItems={filteredItems()}/>
    </div>
  );
}


export default App
