import './App.css';
import Header from '../header/Header'
import Input from '../input/Input'
import Footer from '../footer/Footer'
import TodoList from '../todo-list/TodoList'
import React, { useState } from 'react'

function App() {
  const [todoItems, setTodoItems] = useState([])
  const getInput = (input) => {
    setTodoItems((state)=> {
      const newItem = {
        value: input,
        isCompleted: false,
        id: Math.floor(Math.random() * 10000) 
      }
      return [...state, newItem]
    })
  }

  const updateItem = (todoItem) => {
    
  }

  return (
    <div className="App">
      <Header/>
      <Input handleSubmit={getInput} itemLength={todoItems.length} todoItems={todoItems}/>
      <TodoList todoItems={todoItems} handleEdit={updateItem}/>
      <Footer/>
    </div>
  );
}

export default App;
