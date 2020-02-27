import React from 'react';

// import {createStore, combineReducers} from 'redux';

// let demoState = {
//     expenses: [{
//         id: 1,
//         description: 'Bought house',
//         amount: 50000,
//         createdAt: 55500
//     }],
//     filters: {
//         text: 'house',
//         sortBy: 'amount',
//         startAt: undefined,
//         endAt: undefined
//     }
// }

// const stateExpenseDefault = []; 
// const expensesReducers = (state = stateExpenseDefault, action) => {
//     switch(action.type){
//         default:
//             return state;
//     }
// }

// const stateFiltersDefault = {
//             text: 'house',
//             sortBy: 'amount',
//             startAt: undefined,
//             endAt: undefined
//         };

// const filtersReducers = (state = stateFiltersDefault, action) => {
//     switch(action.type){
//         default:
//             return state;
//     }
// }
// const store = createStore(combineReducers({
//     expenses: expensesReducers,
//     filters: filtersReducers
// }));

// console.log(store.getState());


import {createStore, combineReducers} from 'redux';
const uuidv1 = require('uuid/v1');



const addExpense = ({id = uuidv1(), description = "Rent house", amount = 10000, createdAt = 131219}={})=>{
    return{
        type: 'ADD_EXPENSE',
        expense: {
            // id: id,
            // description: description,
            // amount: amount,
            // createdAt: createdAt
            id,
            description,
            amount,
            createdAt
        }
    }
}
const removeExpense = (id)=>{
    return{
        type: 'REMOVE_EXPENSE',
        id 
    }
}

const editExpense = (id, updates) => {
    return{
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
}

const setTextFilter = (text='') => {
    return{
        type: 'SET_TEXTFILTER',
        text
    }
}

const setSortByDate = () => {
    return{
        type: 'SET_SORT_BY_DATE'
    }
}

const setSortByAmount = () => {
    return{
        type: 'SET_SORT_BY_AMOUNT'
    }
}

const stateExpenseDefault = [];
const expenseReducer = (state = stateExpenseDefault, action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            // return state.concat(action.expense);
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter((exp)=>{
                    return exp.id !== action.id
            })
        case 'EDIT_EXPENSE':
            return state.map((exp)=>{
                if(exp.id === action.id){
                    return {...exp, ...action.updates}
                }else {
                    return exp;
                }
            })
        default:
            return state;
    }
};

const stateFilterDefault = {
    text: 'house',
    sortBy: 'amount',
    startAt: undefined,
    endAt: undefined
};

const filtersReducers = (state=stateFilterDefault, action)=>{
    switch(action.type){
        case 'SET_TEXTFILTER':
            return {...state, text: action.text}
        case 'SET_SORT_BY_DATE':
            return {...state, sortBy: 'date'}
        case 'SET_SORT_BY_AMOUNT':
            return {...state, sortBy: 'amount'}
        default:
            return state;
    }
};

const store = createStore(combineReducers({
    expense: expenseReducer,
    filter: filtersReducers
}));



store.subscribe(()=>{
    console.log(store.getState())
})

let one = store.dispatch(addExpense({description: "Buy car", amount: 50000, createdAt:151219}));
let two = store.dispatch(addExpense({description: "Buy house", amount: 100000, createdAt:171219}));
console.log(one.expense.id);

store.dispatch(removeExpense(one.expense.id));
store.dispatch(editExpense(two.expense.id, {amount: 500000}));
store.dispatch(setTextFilter('clothes'));
store.dispatch(setSortByDate());
store.dispatch(setSortByAmount());
function App() {
    return (
        <div>
            <h1>React</h1>
        </div>
    )
}

export default App;
