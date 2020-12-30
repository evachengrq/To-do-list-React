import './App.css';
import Header from '../header/Header'
import Input from '../input/Input'
import Footer from '../footer/Footer'
import TodoList from '../todo-list/TodoList'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todoItems, setTodoItems] = useState(JSON.parse(localStorage.getItem('todos')))
  const [completionStatus, setCompletionStatus] = useState('All')

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todoItems))
  }, [todoItems])

  const addItem = (input) => {
    if (input.length !== 0) {
      const newItem = {
        value: input.trim(),
        isCompleted: false,
        id: uuidv4() 
      }
      setTodoItems([newItem, ...todoItems])
    }
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
    const updatedItem = {
      value: completedItem.value,
      isCompleted: !completedItem.isCompleted,
      id: completedItem.id 
    }
    setTodoItems([...otherItems, updatedItem])
  }

  const handleSelectAll = () => {
    const activeItems = todoItems.filter(item => !item.isCompleted)
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

  const deleteAllCompleted = () => {
      const filteredItems = todoItems.filter(item => !item.isCompleted)
      setTodoItems(filteredItems)
  }

  return (
    <div className="App">
      <Header/>
      <Input handleSubmit={addItem} itemLength={todoItems.length} handleSelectAll={handleSelectAll}/>
      <TodoList todoItems={filteredItems()} handleEdit={updateItem} handleDelete={deleteItem} handleComplete={setItemCompleted} />
      <Footer showItemsByStatus={showItemsByStatus} completionStatus={completionStatus} deleteAllCompleted={deleteAllCompleted} todoItems={todoItems}/>
    </div>
  );
}

export default App;
