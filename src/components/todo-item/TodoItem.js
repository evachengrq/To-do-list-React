import './TodoItem.css'
import React, { useState } from 'react'

function TodoItem(props) {

  let {isCompleted, value, id} = props.todoItem

  const [todoValue, updateValue] = useState(value)
  const [completeStatus, updateStatus] = useState(isCompleted)
  const [isEditing, updateEditStatus] = useState(false)
  const [showDeleteButton, updateDeleteButtonPresence] = useState(false)

  const updateItem = (event) => {
    props.handleEdit(id, event.target.value)
  }

  const submitEdit = (event) => {
    if (event.key === 'Enter') {
      const updatedValue = event.target.value 
      updateValue(updatedValue)
      updateEditStatus(false)
    }
  }
  
  const showEditInput = () => {
    updateEditStatus(true)
    updateDeleteButtonPresence(false)
  }

  const handleClick = () => {
    updateStatus(completeStatus ? false : true)
  }

  const displayDeleteButton = () => {
    updateDeleteButtonPresence(true)
  }

  const removeDeleteButton = () => {
    updateDeleteButtonPresence(false)
  }

  const deleteItem = () => {
    props.handleDelete(id)
  }


  return (
    <section className={completeStatus ? "todo-item-completed" : "todo-item"} onMouseEnter={displayDeleteButton} onMouseLeave={removeDeleteButton}>
      <div className="container">
        <div className="round">
          <input type="checkbox" id="checkbox"/>
          <label htmlFor="checkbox" onClick={handleClick}></label>
        </div>
      </div>
      {isEditing 
      ? <input type="text" className="edit-input" value={value} onChange={updateItem} onKeyDown={submitEdit} onMouseEnter={removeDeleteButton}/> 
      : <label type="text" className="item-text" onDoubleClick={showEditInput}>{todoValue}</label>}
      <button className={showDeleteButton ? "delete-button" : "hidden"} onClick={deleteItem}>×</button>
    </section>
  )
}

export default TodoItem