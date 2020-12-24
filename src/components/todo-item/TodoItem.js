import './TodoItem.css'
import React, { useState } from 'react'

function TodoItem(props) {

  let {isCompleted, value, id} = props.todoItem
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

  const handleMouseEnter = () => {
    const deleteButton = document.querySelectorAll('.delete-button').item(props.index)
    if(deleteButton !== null || undefined) {
      deleteButton.classList.remove('hidden')
    }
  }

  const handleMouseLeave = () => {
    const deleteButton = document.querySelectorAll('.delete-button').item(props.index)
    if(deleteButton !== null || undefined) {
      deleteButton.classList.add('hidden')
    }
  }

  const handleClickDeleteButton = (event) => {
    const targetItem = event.target.parentNode.remove()
  }


  return (
    <section className={completeStatus ? "todo-item-completed" : "todo-item"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="container">
        <div className="round">
          <input type="checkbox" id="checkbox"/>
          <label htmlFor="checkbox" onClick={handleClick}></label>
        </div>
      </div>
      <label type="text" className="item-text" onDoubleClick={handleDoubleClick}>{todoValue}</label>
      <button className="delete-button hidden" onClick={handleClickDeleteButton}>×</button>
    </section>
  )
}

export default TodoItem