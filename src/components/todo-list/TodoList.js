import './TodoList.css'
import TodoItem from '../todo-item/TodoItem'
import { connect } from "react-redux";
import React from 'react'


function TodoList(props) {
  const todoItems = props.todoItems
  localStorage.setItem('todos', JSON.stringify(todoItems))
  

  return(
    <ul data-testid='todoListComponent' className="todo-items">
      {todoItems.map(
        element => <TodoItem key={element.id} todoItem={element} handleEdit={props.handleEdit} handleDelete={props.handleDelete} handleComplete={props.handleComplete} />
      )}
    </ul>
  )
}

export default TodoList
