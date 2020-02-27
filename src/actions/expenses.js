// ADD_EXPENSE
const uuidv1 = require('uuid/v1');
export const addExpense = ({id = uuidv1(), description = "Rent house", amount = 10000, createdAt = 1131313} = {}) => {
    return {
      type: 'ADD_EXPENSE',
      expense: {
        id,
        description,
        amount,
        createdAt
      }
  
    }
  }
  
  // EDIT_EXPENSE
  export const editExpense = (id, updates) => {
    return {
      type: 'EDIT_EXPENSE',
      id,
      updates
    }
  }

  // REMOVE_EXPENSE
export const removeExpense = (id) => {
    return {
      type: 'REMOVE_EXPENSE',
      id
    }
  }