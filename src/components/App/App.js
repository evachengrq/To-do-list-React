import './App.css';
import Header from '../header/Header'
import Input from '../input/Input'
import Footer from '../footer/Footer'
import TodoList from '../todo-list/TodoList'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todoItems, setTodoItems] = useState([])

  const addItem = (id, input) => {
    setTodoItems((state)=> {
      const newItem = {
        value: input,
        isCompleted: false,
        id: uuidv4() 
      }
      return [newItem, ...state]
    })
  }

  const updateItem = (id, input) => {
    deleteItem(id)
    addItem(id, input)
  }

  const deleteItem = (id) => {
    const restItems = todoItems.filter(todo => todo.id !== id)
    setTodoItems(restItems)
  }

  const setItemCompleted = (id) => {
    const completedItem = todoItems.find(item => item.id === id)
    const otherItems = todoItems.filter(item => item.id !== id)
    setTodoItems(()=> {
      const updatedItem = {
        value: completedItem.value,
        isCompleted: true,
        id: id 
      }
      return [...otherItems, updatedItem]
    })
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
