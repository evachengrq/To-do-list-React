import './TodoList.css'
import TodoItem from '../todo-item/TodoItem'
import React from 'react'


function TodoList(props) {
  const todoItems = props.todoItems

  return(
    <section className="todo-items">
      {todoItems.map(
        element => <TodoItem key={element.id} todoItem={element} handleEdit={props.handleEdit} handleDelete={props.handleDelete} handleComplete={props.handleComplete} />
      )}
    </section>
  )
}

export default TodoList