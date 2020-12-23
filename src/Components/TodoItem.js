import './TodoItem.css'
import React from 'react'

function TodoItem() {
  return (
    <section className="todo-item">
      <div className="container">
        <div className="round">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox"></label>
        </div>
      </div>
      <p className="item-text">item 1</p>
      <button className="close-button">×</button>
    </section>
  )
}

export default TodoItem