import React from 'react';
import {createStore, combineReducers} from 'redux';
const uuidv1 = require('uuid/v1');

const getInvisible = (expense, {text, sortBy, startDate, endDate})=> {
  const result = expense.filter((exp)=>{
    const textMatch = exp.description.toLowerCase().includes(text.toLowerCase());
    const startDateMatch = typeof startDate !== 'number' || startDate <= exp.createdAt;
    const endDateMatch = typeof endDate !== 'number' || endDate >= exp.createdAt;
    return startDateMatch && endDateMatch && textMatch
  })
  if(sortBy == 'amount'){
    const byAmount = (expense) => {
      expense.sortBy((a, b)=>{
        if(a.amount > b.amount){
          return 1;
        }else if(a.amount < b.amount){
          return -1;
        }else {
          return 0;
        }
      });
    };
    result.byAmount();
    return result;
    
  }else if (sortBy == 'date'){
    const byDate = (expense) => {
      expense.sortBy((a, b)=>{
        if(a.createdAt > b.createdAt){
          return 1;
        }else if(a.createdAt < b.createdAt){
          return -1;
        }else {
          return 0;
        }
      });
    };
    result.byAmount();
    return result;
  }else {
    return result;
  }
  
  
}

const addExpense = ({id=uuidv1(), description="default", amount=0, createdAt=0})=> {
  return{
    type: 'ADD_EXPENSE',
    expense: {
    id,
    description,
    amount,
    createdAt
  }
  }

}

const setStartDate = (date)=>{
  return{
    type: 'SET_START_DATE',
    date
  }
}

const setEndDate = (date)=>{
  return{
    type: 'SET_END_DATE',
    date
  }
}

const textFilter = (text)=>{
  return{
    type: 'TEXT_FILTER',
    text
  }
}

const sortByAmount = ()=>{
  return{
    type: 'SORT_BY_AMOUNT',
  }
}

const sortByDate = ()=>{
  return{
    type: 'SORT_BY_DATE',
  }
}

const expenseDefault = [];
const expenseReducer = (state = expenseDefault, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
          return [...state, action.expense]
        default:
            return state;
    }
}

const filterDefault = {
    text: '',
    sortBy: '',
    startDate: undefined,
    endDate: undefined
}
const filterReducer = (state = filterDefault, action) => {
    switch(action.type){
        case 'SET_START_DATE':
          return {...state, startDate: action.date}
        case 'SET_END_DATE':
            return {...state, endDate: action.date}
        case 'TEXT_FILTER':
            return {...state, text: action.text}
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: 'amount'}
        case 'SORT_BY_DATE':
            return {...state, sortBy: 'date'}
        default:
            return state;
    }
}

const store = createStore(combineReducers({
    expense: expenseReducer,
    filter: filterReducer
}))

store.subscribe(() => {
    const state = store.getState();
    console.log(getInvisible(state.expense, state.filter));
})

let one = store.dispatch(addExpense({description: "buy car", amount: 100000, createdAt: -1000}));
let two = store.dispatch(addExpense({description: "buy house", amount: 50000, createdAt: 1000}));
// store.dispatch(setStartDate(-500));
// store.dispatch(textFilter("caR"));
store.dispatch(sortByAmount());
function App() {
    return (
      <div className="App">
        
      </div>
    );
  }
  
  export default App;