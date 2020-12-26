import './TodoItem.css'
import React, { useState } from 'react'

function TodoItem(props) {

  let {isCompleted, value, id} = props.todoItem

  const [todoValue, updateValue] = useState(value)
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

  const leaveEditing = (event) => {
    const updatedValue = event.target.value 
    updateValue(updatedValue)
    updateEditStatus(false)
  }

  const handleClick = () => {
    props.handleComplete(id)
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
    <section className={isCompleted ? "todo-item-completed" : "todo-item"} onMouseOver={displayDeleteButton} onMouseLeave={removeDeleteButton}>
      <div className="container">
        <div className="round">
          <input type="checkbox" id="checkbox" onClick={handleClick}/>
          <label htmlFor="checkbox"></label>
        </div>
      </div>
      {isEditing 
      ? <input type="text" className="edit-input" value={value} onChange={updateItem} onKeyDown={submitEdit} onMouseEnter={removeDeleteButton} onBlur={leaveEditing}/> 
      : <label type="text" className="item-text" onDoubleClick={showEditInput}>{todoValue}</label>}
      <button className={showDeleteButton ? "delete-button" : "hidden"} onClick={deleteItem}>×</button>
    </section>
  )
}

export default TodoItem