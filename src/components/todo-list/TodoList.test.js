import React from "react";
import { render } from "@testing-library/react";
import TodoList from "./TodoList";

const handleEdit = jest.fn()
const handleDelete = jest.fn()
const handleComplete = jest.fn()

describe('renders todoList', () => {
  test('renders todoList when empty array is provided', () => {
    const todoList = render(<TodoList todoItems={[]} handleEdit={handleEdit} handleDelete={handleDelete} handleComplete={handleComplete} />)
    expect(todoList.getByRole('list')).not.toBeNull()
  })

  test('renders todoList when non-empty array is provided', () => {
    const todoList = render(<TodoList todoItems={[{value: 'item 1', isCompleted: true, id: '1'}, {value: 'item 2', isCompleted: false, id: '2'}]} handleEdit={handleEdit} handleDelete={handleDelete} handleComplete={handleComplete} />)
    expect(todoList.getByText('item 1')).not.toBeNull()
    expect(todoList.getByText('item 2')).not.toBeNull()
  })
})
