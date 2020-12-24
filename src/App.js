import './App.css';
import Header from './Components/Header'
import Input from './Components/Input'
import Footer from './Components/Footer'
import TodoItems from './Components/TodoItems'
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
      <Input handleSubmit={getInput} itemLength={todoItems.length} />
      <TodoItems todoItems={todoItems} handleEdit={updateItem}/>
      <Footer/>
    </div>
  );
}

export default App;
