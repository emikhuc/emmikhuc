import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore, combineReducers} from 'redux';

const getInvisible = (expenses, {text, sortBy, startDate, endDate})=>{
    return expenses.filter((exp)=>{
        const startDateMatch = typeof startDate !== 'number' || startDate <= exp.createdAt;
        const endDateMatch = typeof endDate !== 'number' || endDate >= exp.createdAt;
        return startDateMatch && endDateMatch
    }).sort((a,b)=>{
        if(sortBy==='amount'){
            return a.amount < b.amount ? 1 : -1
        }else if(sortBy==='date'){
            return a.createdAt < b.createdAt ? 1 : -1
        }
    })

}


const addExpense = ({id=0, description = "none", amount = 0, createdAt = 10120})=>{
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

const editExpense = (id, updates)=> {
    return{
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
}

const removeExpense = (id)=>{
    return{
        type: 'REMOVE_EXPENSE',
        id
    }
}

const setTextFilter = (text='')=>{
    return{
        type: 'SET_TEXT_FILTER',
        text
    }
}

const sortByDate = ()=>{
    return{
        type: 'SORT_BY_DATE'
    }
}

const sortByAmount = ()=>{
    return{
        type: 'SORT_BY_AMOUNT'
    }
}

const setStartDate = (startDate = undefined)=>{
    return{
        type: 'SET_START_DATE',
        startDate
    }
}

const setEndDate = (endDate = undefined)=>{
    return{
        type: 'SET_END_DATE',
        endDate
    }
}

const expenseDefault = [];
const expenseReducer = (state = expenseDefault, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'EDIT_EXPENSE':
            return state.map((exp)=>{
                if(exp.id === action.id){
                    return {...exp, ...action.updates}
                }else{
                    return state
                }
            })
        case 'REMOVE_EXPENSE':
            return state.filter((exp)=>{
                return exp.id !== action.id
            })
        default:
            return state
    }
}

const filterDefault = {
    text: 'house',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = filterDefault, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {...state, text: action.text}
        case 'SORT_BY_DATE':
            return {...state, sortBy: "date"}
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: "amount"}
        case 'SET_START_DATE':
            return {...state, startDate: action.startDate}
            case 'SET_END_DATE':
                return {...state, endDate: action.endDate}
        default:
            return state
    }
}

const store = createStore(combineReducers({
    expense: expenseReducer,
    filter: filterReducer
}))

// store.subscribe(()=>{
//     console.log(store.getState())
// })

store.subscribe(()=>{
    const state = store.getState();
    console.log(getInvisible(state.expense, state.filter));
})

let one = store.dispatch(addExpense({id: 1, description: "buy house", amount: 50000, createdAt: 1000}));
let two = store.dispatch(addExpense({id: 2, description: "buy car", amount: 100000, createdAt: 200}));
// store.dispatch(removeExpense(two.expense.id));
// store.dispatch(editExpense(one.expense.id, {amount: 70000}));

// store.dispatch(setTextFilter("clothes"));


store.dispatch(setStartDate(100));
store.dispatch(setEndDate(3000));
store.dispatch(sortByDate());
// store.dispatch(sortByAmount());



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
