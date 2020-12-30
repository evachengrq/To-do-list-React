import React from 'react'
import { fireEvent, render } from '@testing-library/react';
import Input from "./Input";


const handleSubmit = jest.fn()
const handleSelectAll = jest.fn()
let input

describe('renders input field', () => {

  let textfield
  
  beforeEach(() => {
    input = render(<Input handleSubmit={handleSubmit} itemLength={0} handleSelectAll={handleSelectAll}/>)
    textfield = input.getByRole('textbox')
  })

  test('displays the placeholder when nothing is typed in', () => {
    expect(input.getByPlaceholderText('What needs to be done?')).not.toBeNull()
  })

  test('displays the input when someting is typed in', () => {
    fireEvent.change(textfield, {target: {value : 'item 1'}})
    expect(textfield.value).toBe('item 1')
    expect(handleSubmit).toBeCalledTimes(0)
  })

  test('calls the handleSubmit function when enter key is down', () => {
    fireEvent.keyDown(textfield, {key: 'Enter', code: 'Enter'})
    expect(handleSubmit).toBeCalledTimes(1)
  })

  test('calls no handleSubmit function when other key is down', () => {
    fireEvent.keyDown(textfield, {key: 'a', code: 'KeyA'})
    expect(handleSubmit).toBeCalledTimes(0)
  })

  test('resets the textfield when enter key is down', () => {
    fireEvent.change(textfield, {target: {value: 'a'}})
    fireEvent.keyDown(textfield, {key: 'Enter', code: 'Enter'})
    expect(textfield.value).toBe('')
    expect(handleSubmit).toBeCalledTimes(1)
  })
})

describe('renders select all button', () => {

  test('displays no select all button when itemLength is 0', () => {
    input = render(<Input handleSubmit={handleSubmit} itemLength={0} handleSelectAll={handleSelectAll}/>)
    expect(input.queryByRole('button', {hidden: true})).not.toBeNull()
  })

  test('displays select all button when itemLength is greater than 0', () => {
    input = render(<Input handleSubmit={handleSubmit} itemLength={1} handleSelectAll={handleSelectAll}/>)
    expect(input.getByRole('button', {hidden: false})).not.toBeNull()
  })

  test('calls handleSelectAll function when click select all button', () => {
    input = render(<Input handleSubmit={handleSubmit} itemLength={1} handleSelectAll={handleSelectAll}/>)
    input.getByRole('button').click()
    expect(handleSelectAll).toBeCalledTimes(1)
  })


})