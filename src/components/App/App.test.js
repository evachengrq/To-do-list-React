import React from "react";
import { Provider } from "react-redux";
import store from "../../store";
import { render } from '../../test-utils/test.util';
import { act, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

describe('renders App', () => {
  
  let app
  beforeEach(() => {
    localStorage.clear()
    app = render(<App />)
  })
  
  describe('renders components', () => {
    test('renders header', () => {
      expect(app.getByTestId('headerComponent')).not.toBeNull()
    })

    test('renders input', () => {
      expect(app.getByTestId('inputComponent')).not.toBeNull() 
    })

    test('render todolist', () => {
      expect(app.getByTestId('todoListComponent')).not.toBeNull()
    })

    test('renders footer', () => {
      expect(app.getByTestId('footerComponent')).not.toBeNull()
    })
  })
  
})

describe('when type in the type box', () => {
  let app
  let input 
  beforeEach(() => {
    localStorage.clear()
    app = render(<App />)
    input = app.getByRole('textbox')
    fireEvent.change(input, {target: {value: '    item 3'}})
  })
  
  test('shows the input in the type box', () => {
    expect(input.value).toBe('    item 3')
  })

  describe('when enter key is down', () => {
    beforeEach(() => {
      fireEvent.keyDown(input, {key: 'Enter', code: 'Enter'})
    })
    test('item should be added', () => {
      expect(input.value).toBe('')
      expect(app.getByText('item 3')).not.toBeNull()
      expect(app.getByText('1 item left')).not.toBeNull()
    })

    describe('when item is edited', () => {
      test('should show new item', () => {
        const item = app.getByText('item 3')
        fireEvent.doubleClick(item)
        const input = app.getByTestId('editTextField')
        fireEvent.change(input, {target: {value : 'item 1'}})
        fireEvent.keyDown(input, {key: 'Enter', code: 'Enter'})
        expect(app.getByText('item 1')).not.toBeNull()
      })
    })

    describe('when click on completed filter', () => {
      let completedFilter
      beforeEach(() => {
        completedFilter = app.getByText('Completed')
        completedFilter.click()
      })
      test('should show no item', () => {
        expect(app.queryByText('item 3')).toBeNull()
      })
    })

    describe('when click on all filter', () => {
      let allFilter
      beforeEach(() => {
        allFilter = app.getByText('All')
        allFilter.click()
      })
      test('should show one item', () => {
        expect(app.queryByText('item 3')).not.toBeNull()
      })

      describe('when click the complete all button', () => {
        let completeAll
        beforeEach(() => {
          completeAll = app.getByText('❯')
          fireEvent.click(completeAll)
        })
        test('should show one item with all filter', () => {
          
          expect(app.queryByText('item 3')).not.toBeNull()
        })

        describe('when click the clear completed button', () => {
          test('should show no item with all filter', () => {
            const clearCompleted = app.queryByText('Clear completed')
            fireEvent.click(clearCompleted)
            expect(app.queryByText('item 3')).toBeNull()
          })
        })
      })
    })

    describe('when click on active filter', () => {
      let activeFilter
      beforeEach(() => {
        activeFilter = app.getByText('Active')
        activeFilter.click()
      })
      test('should show 1 item', () => {
        expect(app.getByText('item 3')).not.toBeNull()
      })

      describe('when click the complete button', () => {
        let completeButton
        beforeEach(() => {
          completeButton = app.getByRole('checkbox')
          fireEvent.click(completeButton)
        })
        test('should show no item with active filter', () => {
          expect(app.queryByText('item 3')).toBeNull()
        })

        describe('when click the complete all button', () => {
          test('should show one item with active filter', () => {
            const completeAll = app.getByText('❯')
            fireEvent.click(completeAll)
            expect(app.getByText('item 3')).not.toBeNull()
          })
        })
      })
    })
    

    describe('when click the delete button', () => {
      test('item should be deleted', () => {
        const item = app.getByText('item 3')
        fireEvent.mouseOver(item)
        const deleteButton = app.getByText('×')
        fireEvent.click(deleteButton)
        expect(app.queryByText('item 3')).toBeNull()
      })
    })
  })
})