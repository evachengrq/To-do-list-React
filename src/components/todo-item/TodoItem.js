import './TodoItem.css'
import React, { useState } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux';
import store from '../../store';

function TodoItem(props) {

  const {isCompleted, value, id} = props.todoItem;

  const [isEditing, updateEditStatus] = useState(false)

  const updateItem = (event) => {
    const editedItem = {
      value: event.target.value,
      isCompleted: isCompleted,
      id: id
    }
    props.handleEdit(editedItem)
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
    const completedItem = {
      id: id,
      value: value,
      isCompleted: !isCompleted
    }
    props.handleComplete(completedItem)
  }

  const deleteItem = () => {
    props.handleDelete(id)
  }

  return (
    <li className="todo-item">
      <input type="checkbox" checked={isCompleted ? true : false} className="todo-item__checkbox" id={id} onClick={handleClick}/>
      {isEditing 
      ? <input type="text" data-testid="editTextField" className="todo-item__input" value={value} onChange={updateItem} onKeyDown={submitEdit} onBlur={leaveEditing}/> 
      : <p className={classNames(['todo-item__text', {'todo-item__text--crossed': isCompleted}])} onDoubleClick={showEditInput}>{value}</p>}
      <button className={isEditing ? "hidden" : "todo-item__button"} onClick={deleteItem}>×</button>
    </li>
  )
}

export default TodoItem