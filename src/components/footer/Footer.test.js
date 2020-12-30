import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

const showItemsByStatus = jest.fn()
showItemsByStatus.mockReturnValue('All')
const completionStatus = 'All'
const deleteAllCompleted = jest.fn()

describe('renders footers', () => {
  describe('renders count of active items', () => {
    test('shows 0 item left when there is no item', () => {
      const footer = render(<Footer showItemsByStatus={showItemsByStatus} completionStatus={completionStatus} deleteAllCompleted={deleteAllCompleted} todoItems={[]}/>)
      expect(footer.getByText('0 item left')).not.toBeNull()
    })
  
    test('shows 0 item left when there is no active item', () => {
      const footer = render(<Footer showItemsByStatus={showItemsByStatus} completionStatus={completionStatus} deleteAllCompleted={deleteAllCompleted} todoItems={[{id: '1', isCompleted: true, value: 'item 1'}]}/>)
      expect(footer.getByText('0 item left')).not.toBeNull()
    })
  
    test('shows 1 item left when there is 1 active item', () => {
      const footer = render(<Footer showItemsByStatus={showItemsByStatus} completionStatus={completionStatus} deleteAllCompleted={deleteAllCompleted} todoItems={[{id: '1', isCompleted: false, value: 'item 1'}]}/>)
      expect(footer.getByText('1 item left')).not.toBeNull()
    })
  
    test('shows 2 items left when there are 2 active items', () => {
      const footer = render(<Footer showItemsByStatus={showItemsByStatus} completionStatus={completionStatus} deleteAllCompleted={deleteAllCompleted} todoItems={[{id: '1', isCompleted: false, value: 'item 1'}, {id: '2', isCompleted: false, value: 'item 2'}]}/>)
      expect(footer.getByText('2 items left')).not.toBeNull()
    })
  })
  
  describe('renders status filter', () => {
    test('shows 3 filter tabs', () => {
      const footer = render(<Footer showItemsByStatus={showItemsByStatus} completionStatus={completionStatus} deleteAllCompleted={deleteAllCompleted} todoItems={[]}/>)
      expect(footer.getByText('All')).not.toBeNull()
      expect(footer.getByText('Completed')).not.toBeNull()
      expect(footer.getByText('Active')).not.toBeNull()
    })

    test('calls the showItemsByStatus function when all tab is clicked', () => {
      const footer = render(<Footer showItemsByStatus={showItemsByStatus} completionStatus={completionStatus} deleteAllCompleted={deleteAllCompleted} todoItems={[]}/>)
      footer.getByText('All').click()
      expect(showItemsByStatus).toHaveBeenCalledTimes(1)
      expect(showItemsByStatus).toHaveBeenCalledWith('all')
    })

    test('calls the showItemsByStatus function when active tab is clicked', () => {
      const footer = render(<Footer showItemsByStatus={showItemsByStatus} completionStatus={completionStatus} deleteAllCompleted={deleteAllCompleted} todoItems={[]}/>)
      footer.getByText('Active').click()
      expect(showItemsByStatus).toHaveBeenCalledTimes(1)
      expect(showItemsByStatus).toHaveBeenCalledWith('active')
    })

    test('calls the showItemsByStatus function when completed tab is clicked', () => {
      const footer = render(<Footer showItemsByStatus={showItemsByStatus} completionStatus={completionStatus} deleteAllCompleted={deleteAllCompleted} todoItems={[]}/>)
      footer.getByText('Completed').click()
      expect(showItemsByStatus).toHaveBeenCalledTimes(1)
      expect(showItemsByStatus).toHaveBeenCalledWith('completed')
    })
  })

  describe('renders clear completed button', () => {
    test('shows no clear completed button when there is no item', () => {
      const footer = render(<Footer showItemsByStatus={showItemsByStatus} completionStatus={completionStatus} deleteAllCompleted={deleteAllCompleted} todoItems={[]}/>)
      expect(footer.getByText('Clear completed')).toBeNull
    })

    test('shows no clear completed button when there is no completed item', () => {
      const footer = render(<Footer showItemsByStatus={showItemsByStatus} completionStatus={completionStatus} deleteAllCompleted={deleteAllCompleted} todoItems={[{id: '1', isCompleted: false, value: 'item 1'}, {id: '2', isCompleted: false, value: 'item 2'}]}/>)
      expect(footer.getByText('Clear completed')).toBeNull
    })

    test('shows clear completed button when there are completed items', () => {
      const footer = render(<Footer showItemsByStatus={showItemsByStatus} completionStatus={completionStatus} deleteAllCompleted={deleteAllCompleted} todoItems={[{id: '1', isCompleted: true, value: 'item 1'}]}/>)
      expect(footer.getByText('Clear completed')).not.toBeNull
    })

    test('call deleteAllCompleted method when click clear completed button', () => {
      const footer = render(<Footer showItemsByStatus={showItemsByStatus} completionStatus={completionStatus} deleteAllCompleted={deleteAllCompleted} todoItems={[{id: '1', isCompleted: true, value: 'item 1'}]}/>)
      footer.getByText('Clear completed').click()
      expect(deleteAllCompleted).toBeCalledTimes(1)
    })
  })
})