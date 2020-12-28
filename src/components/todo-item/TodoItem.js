import './TodoItem.css'
import React, { useState } from 'react'
import classNames from 'classnames'

function TodoItem(props) {

  const {isCompleted, value, id} = props.todoItem;

  const [isEditing, updateEditStatus] = useState(false)
  const [showDeleteButton, updateDeleteButtonPresence] = useState(false)
  

  const updateItem = (event) => {
    props.handleEdit(id, event.target.value)
  }

  const submitEdit = (event) => {
    if (event.key === 'Enter') {
      updateEditStatus(false)
    }
  }
  
  const showEditInput = () => {
    updateEditStatus(true)
    updateDeleteButtonPresence(false)
  }

  const leaveEditing = () => {
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
    <li className="todo-item" onMouseOver={displayDeleteButton} onMouseLeave={removeDeleteButton}>
      <div className="container">
        <div className="round">
          <input type="checkbox" id={id} onClick={handleClick}/>
          <label htmlFor={id}></label>
        </div>
      </div>
      {isEditing 
      ? <input type="text" className="edit-input" value={value} onChange={updateItem} onKeyDown={submitEdit} onMouseEnter={removeDeleteButton} onBlur={leaveEditing}/> 
      : <p className={classNames(['item-text', {'completed': isCompleted}])} onDoubleClick={showEditInput}>{value}</p>}
      <button className={classNames({'delete-button': showDeleteButton, "hidden": !showDeleteButton})} onClick={deleteItem}>×</button>
    </li>
  )
}
export default TodoItem