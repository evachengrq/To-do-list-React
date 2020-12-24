import './TodoItems.css'
import TodoItem from './TodoItem'
import React from 'react'


function TodoItems(props) {
  const todoItems = props.todoItems

  return(
    <section className="todo-items">
      {todoItems.map(element => <TodoItem key={element.id} todoItem={element} status={element}/>)}
    </section>
  )
}

export default TodoItems