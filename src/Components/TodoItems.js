import './TodoItems.css'
import TodoItem from './TodoItem'
import React from 'react'


function TodoItems() {
  return(
    <section className="todo-items">
      <TodoItem/>
      <TodoItem/>
    </section>
  )
}

export default TodoItems