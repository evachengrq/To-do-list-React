import { v4 as uuidv4 } from 'uuid';

const initState = JSON.parse(localStorage.getItem('todos')) || []

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'add_item': {
      const newItem = {
        id: uuidv4(),
        value: action.payload,
        isCompleted: false
      }
      return [...state, newItem];
    }     
    
    case 'delete_item':
      return state.filter(item => item.id !== action.payload);
    
    case 'update_item': {
      const index = state.findIndex(item => item.id === action.payload.id)
      const itemsBeforeEditedItem = state.slice(0, index)
      const itemsAfterEditedItem = state.slice(index + 1)
      return [...itemsBeforeEditedItem, action.payload, ...itemsAfterEditedItem];
    }

    case 'set_all': {
      return state.map(item => ({...item, isCompleted: action.payload}))
    }

    case 'clear_completed': 
      return state.filter(item => !item.isCompleted)

    default:
      return state;
  }
}

export default reducer