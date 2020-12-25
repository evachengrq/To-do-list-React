import './App.css';
import Header from '../header/Header'
import Input from '../input/Input'
import Footer from '../footer/Footer'
import TodoList from '../todo-list/TodoList'
import React, { useState } from 'react'

function App() {
  const [todoItems, setTodoItems] = useState([])

  const addItem = (id, input) => {
    setTodoItems((state)=> {
      const newItem = {
        value: input,
        isCompleted: false,
        id: id 
      }
      return [newItem, ...state]
    })
  }

  const updateItem = (id, input) => {
    deleteItem(id)
    addItem(id, input)
  }

  const deleteItem = (id) => {
    const deletedItems = todoItems.filter(todo => todo.id !== id)
    setTodoItems(deletedItems)
  }

  const setItemCompleted = (id) => {
    const updatedItemList = todoItems.find(item => item.id ===id).isCompleted = true
    setTodoItems(updatedItemList)
  }

  return (
    <div className="App">
      <Header/>
      <Input handleSubmit={addItem} itemLength={todoItems.length} todoItems={todoItems}/>
      <TodoList todoItems={todoItems} handleEdit={updateItem} handleDelete={deleteItem} handleComplete={setItemCompleted}/>
      <Footer/>
    </div>
  );
}

export default App;
