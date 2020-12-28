import './TodoItem.css'
import React, { useState } from 'react'
import classNames from 'classnames'

function TodoItem(props) {

  const {isCompleted, value, id} = props.todoItem;

  const [isEditing, updateEditStatus] = useState(false)

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
  }

  const leaveEditing = () => {
    updateEditStatus(false)
  }

  const handleClick = () => {
    props.handleComplete(id)
  }

  const deleteItem = () => {
    props.handleDelete(id)
  }

  return (
    <li className="li">
      <div className="container">
        <div className="round">
          <input type="checkbox" id={id} onClick={handleClick}/>
          <label htmlFor={id}></label>
        </div>
      </div>
      {isEditing 
      ? <input type="text" className="li__input" value={value} onChange={updateItem} onKeyDown={submitEdit} onBlur={leaveEditing}/> 
      : <p className={classNames(['li__text', {'li__text--crossed': isCompleted}])} onDoubleClick={showEditInput}>{value}</p>}
      <button className={isEditing ? "hidden" : "li__button"} onClick={deleteItem}>×</button>
    </li>
  )
}
export default TodoItem