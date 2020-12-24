import './TodoItems.css'
import TodoItem from './TodoItem'
import React from 'react'


function TodoItems(props) {
  const todoItems = props.todoItems

  return(
    <section className="todo-items">
      {todoItems.map((element, index) => <TodoItem key={element.id} todoItem={element} status={element} index={index}/>)}
    </section>
  )
}

export default TodoItems