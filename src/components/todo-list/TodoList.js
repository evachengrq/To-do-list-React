import './TodoList.css'
import TodoItem from '../todo-item/TodoItem'
import React from 'react'


function TodoList(props) {
  const todoItems = props.todoItems

  return(
    <section className="todo-items">
      {todoItems.map((element, index) => <TodoItem key={element.id} todoItem={element} status={element} index={index}/>)}
    </section>
  )
}

export default TodoList