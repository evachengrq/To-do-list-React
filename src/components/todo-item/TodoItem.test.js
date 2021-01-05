import React from "react";
import { fireEvent, render } from '@testing-library/react';
import TodoItem from "./TodoItem";

const handleEdit = jest.fn()
const handleDelete = jest.fn()
const handleComplete = jest.fn()


describe('renders todoItems', () => {
  describe('renders checkbox', () => {
    test('checks checkbox when isCompleted is true', () => {
      const todoItem = render(<TodoItem key={1} todoItem={{value: 'item 1', isCompleted: true, id: '1'}} handleEdit={handleEdit} handleDelete={handleDelete} handleComplete={handleComplete} />)
      expect(todoItem.getByRole('checkbox')).toBeChecked()
    })
  
    test('checks no checkbox when isCompleted is false', () => {
      const todoItem = render(<TodoItem key={1} todoItem={{value: 'item 1', isCompleted: false, id: '1'}} handleEdit={handleEdit} handleDelete={handleDelete} handleComplete={handleComplete} />)
      expect(todoItem.getByRole('checkbox')).not.toBeChecked()
    })
  
    test('calls handleComplete function when click the checkbox', () =>{
      const todoItem = render(<TodoItem key={'1'} todoItem={{value: 'item 1', isCompleted: false, id: '1'}} handleEdit={handleEdit} handleDelete={handleDelete} handleComplete={handleComplete} />)
      todoItem.getByRole('checkbox').click()
      expect(handleComplete).toBeCalledTimes(1)
      expect(handleComplete).toBeCalledWith({value: 'item 1', isCompleted: true, id: '1'})
    })
  })

  describe('renders items', () => {
    test('renders item text', () => {
      const todoItem = render(<TodoItem key={'1'} todoItem={{value: 'item 1', isCompleted: false, id: '1'}} handleEdit={handleEdit} handleDelete={handleDelete} handleComplete={handleComplete} />)
      const todoText = todoItem.getByText('item 1')
      expect(todoText).not.toBeNull()
      expect(todoText.classList.contains('todo-item__text--crossed')).toBe(false)
    })

    test('render item with line through when item is completed', () => {
      const todoItem = render(<TodoItem key={'1'} todoItem={{value: 'item 1', isCompleted: true, id: '1'}} handleEdit={handleEdit} handleDelete={handleDelete} handleComplete={handleComplete} />)
      const todoText = todoItem.getByText('item 1')
      expect(todoText).not.toBeNull()
      expect(todoText.classList.contains('todo-item__text--crossed')).toBe(true)
    })

    test('shows input when double click the todotext', () => {
      const todoItem = render(<TodoItem key={'1'} todoItem={{value: 'item 1', isCompleted: false, id: '1'}} handleEdit={handleEdit} handleDelete={handleDelete} handleComplete={handleComplete} />)
      const todoText = todoItem.getByText('item 1')
      fireEvent.doubleClick(todoText)
      expect(todoItem.getByRole('textbox')).not.toBeNull()
    })

    test('calls handleEdit function when input is on change', () => {
      const todoItem = render(<TodoItem key={'1'} todoItem={{value: 'item 1', isCompleted: false, id: '1'}} handleEdit={handleEdit} handleDelete={handleDelete} handleComplete={handleComplete} />)
      const todoText = todoItem.getByText('item 1')
      fireEvent.doubleClick(todoText)
      const todoInput = todoItem.getByRole('textbox')
      fireEvent.change(todoInput, {target: {value: 'item 2'}})
      expect(handleEdit).toBeCalledTimes(1)
      expect(handleEdit).toBeCalledWith({value: 'item 2', isCompleted: false, id: '1'})
    })

    test('shows todoText when enter key is down', () => {
      const todoItem = render(<TodoItem key={'1'} todoItem={{value: 'item 1', isCompleted: false, id: '1'}} handleEdit={handleEdit} handleDelete={handleDelete} handleComplete={handleComplete} />)
      const todoText = todoItem.getByText('item 1')
      fireEvent.doubleClick(todoText)
      const todoInput = todoItem.getByRole('textbox')
      fireEvent.keyDown(todoInput, {key: 'Enter', code: 'Enter'})
      expect(todoItem.queryByRole('textbox')).toBeNull()
    })

    test('shows input when other key is down', () => {
      const todoItem = render(<TodoItem key={'1'} todoItem={{value: 'item 1', isCompleted: false, id: '1'}} handleEdit={handleEdit} handleDelete={handleDelete} handleComplete={handleComplete} />)
      const todoText = todoItem.getByText('item 1')
      fireEvent.doubleClick(todoText)
      const todoInput = todoItem.getByRole('textbox')
      fireEvent.keyDown(todoInput, {key: 'a', code: 'KeyA'})
      expect(todoItem.queryByRole('textbox')).not.toBeNull()
    })

    test('shows todoText when input is on blur', () => {
      const todoItem = render(<TodoItem key={'1'} todoItem={{value: 'item 1', isCompleted: false, id: '1'}} handleEdit={handleEdit} handleDelete={handleDelete} handleComplete={handleComplete} />)
      const todoText = todoItem.getByText('item 1')
      fireEvent.doubleClick(todoText)
      fireEvent.blur(todoItem.queryByRole('textbox'))
      expect(todoItem.queryByRole('textbox')).toBeNull()
    })
  })

  describe('renders delete button', () => {
    test('shows delete button when hover on todoItem', () => {
      const todoItem = render(<TodoItem key={'1'} todoItem={{value: 'item 1', isCompleted: false, id: '1'}} handleEdit={handleEdit} handleDelete={handleDelete} handleComplete={handleComplete} />)
      fireEvent.mouseOver(todoItem.getByText('item 1'))
      const button = todoItem.getByRole('button')
      expect(button.classList.contains('todo-item__button')).toBe(true)
      expect(button.classList.contains('hidden')).toBe(false)
    })

    test('calls handleDelete function when click delete button', () => {
      const todoItem = render(<TodoItem key={'1'} todoItem={{value: 'item 1', isCompleted: false, id: '1'}} handleEdit={handleEdit} handleDelete={handleDelete} handleComplete={handleComplete} />)
      fireEvent.mouseOver(todoItem.getByText('item 1'))
      const button = todoItem.getByRole('button')
      fireEvent.click(button)
      expect(handleDelete).toBeCalledTimes(1)
      expect(handleDelete).toBeCalledWith('1')
    })
  })
})


