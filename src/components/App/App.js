import './App.css';
import Header from '../header/Header'
import Input from '../input/Input'
import Footer from '../footer/Footer'
import TodoList from '../todo-list/TodoList'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todoItems, setTodoItems] = useState([])

  const addItem = (input) => {
    const newItem = {
      value: input,
      isCompleted: false,
      id: uuidv4() 
    }
    setTodoItems([newItem, ...todoItems])
  }

  const updateItem = (id, input) => {
    const itemToBeEdited = todoItems.find(item => item.id === id)
    const index = todoItems.findIndex(item => item.id ===id)
    const editedItem = {
      value: input,
      isCompleted: itemToBeEdited.isCompleted,
      id: itemToBeEdited.id
    }
    const itemsBeforeEditedItem = todoItems.slice(0, index)
    const itemsAfterEditedItem = todoItems.slice(index + 1)
    setTodoItems([...itemsBeforeEditedItem, editedItem, ...itemsAfterEditedItem])
  }


  const deleteItem = (id) => {
    const restItems = todoItems.filter(todo => todo.id !== id)
    setTodoItems(restItems)
  }

  const setItemCompleted = (id) => {
    const completedItem = todoItems.find(item => item.id === id)
    const otherItems = todoItems.filter(item => item.id !== id)
    const completionStatus = completedItem.isCompleted ? false : true;
    const updatedItem = {
      value: completedItem.value,
      isCompleted: completionStatus,
      id: completedItem.id 
    }
    setTodoItems([...otherItems, updatedItem])
  }

  const handleSelectAll = () => {
    const activeItems = todoItems.filter(item => item.isCompleted === false)
    if (activeItems.length > 0) {
      setTodoItems(setAllItemsCompletion(true))
    } else {
      setTodoItems(setAllItemsCompletion(false))
    }
  }

  const setAllItemsCompletion = (completionStatus) => {
    const items = []
    for (let i = 0; i < todoItems.length; i++) {
      const item = {
        value: todoItems[i].value,
        isCompleted: completionStatus,
        id: todoItems[i].id
      }
      items.push(item)
    }
    return items
  }

  return (
    <div className="App">
      <Header/>
      <Input handleSubmit={addItem} itemLength={todoItems.length} todoItems={todoItems} handleSelectAll={handleSelectAll}/>
      <TodoList todoItems={todoItems} handleEdit={updateItem} handleDelete={deleteItem} handleComplete={setItemCompleted}/>
      <Footer/>
    </div>
  );
}

export default App;
