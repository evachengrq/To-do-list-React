import './TodoItem.css'
import React from 'react'

function TodoItem({todoItem}) {

  const {isCompleted, value} = todoItem
  return (
    <section className={isCompleted ? "todo-item-completed" : "todo-item"}>
      <div className="container">
        <div className="round">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox"></label>
        </div>
      </div>
      <p className="item-text">{value}</p>
      <button className="delete-button">×</button>
    </section>
  )
}

export default TodoItem