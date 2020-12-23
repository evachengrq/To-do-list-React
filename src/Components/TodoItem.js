import './TodoItem.css'
import React from 'react'

function TodoItem() {
  return(
    <section className="todo-item">
      <div className="container">
  <div className="round">
    <input type="checkbox" id="checkbox" />
    <label htmlFor="checkbox"></label>
  </div>
</div>
      <p>item 1</p>
      <button>X</button>
    </section>
  )
}

export default TodoItem