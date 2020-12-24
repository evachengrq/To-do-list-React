import './TodoItem.css'
import React, { useState } from 'react'

function TodoItem({todoItem}) {

  let {isCompleted, value, id} = todoItem
  const [todoValue, updateValue] = useState(value)
  const [completeStatus, updateStatus] = useState(isCompleted)

  const handleEdit = (event) => {
    if (event.key === 'Enter') {
      const updatedValue = event.target.value 
      updateValue(updatedValue)
    }
  }
  
  const handleDoubleClick = (event) => {
    const oldItemText = event.target.innerText
    event.target.innerText = ''
    
    const editInput = document.createElement('input')
    editInput.type = "text"
    editInput.classList.add('edit-input')
    editInput.value = oldItemText
    editInput.addEventListener('keypress', handleEdit)
    event.target.appendChild(editInput)
  }

  const handleClick = () => {
    updateStatus(completeStatus ? false : true)
  }

  return (
    <section className={completeStatus ? "todo-item-completed" : "todo-item"}>
      <div className="container">
        <div className="round">
          <input type="checkbox" id="checkbox"/>
          <label htmlFor="checkbox" onClick={handleClick}></label>
        </div>
      </div>
      <label type="text" className="item-text" onDoubleClick={handleDoubleClick}>{todoValue}</label>
      <button className="delete-button">×</button>
    </section>
  )
}

export default TodoItem