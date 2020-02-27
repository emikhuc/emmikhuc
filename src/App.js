import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, combineReducers } from 'redux';

import {addExpense, editExpense, removeExpense} from './actions/expenses';
import {sortByDate, sortByAmount, setEndDate, setStartDate, setTextFilter} from './actions/filters';
import getInvisibleExpenses from './selectors/expenses';
import AppRouter from './routers/AppRouter';
import { Provider} from 'react-redux';
import configStore from './store/configureStore';
const store = configStore();

const jsx = () => (
  <Provider store = {store}>
    <AppRouter/>
  </Provider>
)
  



// let demoState = {
//   expenses: [{
//     id: 1,
//     description: 'Bought house',
//     amount: 50000,
//     createdAt: 55500
//   }],
//   filters: {
//     text: 'house',
//     sortBy: 'amount',
//     startAt: undefined,
//     endAt: undefined
//   }
// }


// SET_DATE_START
// SET_DATE_END







  //check sortby
  // if(sortBy == 'amount'){
  //   const sortByAmount = function(expense){
  //     expense.sort((a, b)=>{
  //         if(a.amount > b.amount){
  //             return 1
  //         }else if(a.amount < b.amount){
  //             return -1
  //         }else {
  //             return 0
  //         }
  //     })
  
  // }
  // sortByAmount(result);
  //   return result;
  // }else if(sortBy == 'date'){
  //   const sortByDate = function(expense){
  //     expense.sort((a, b)=>{
  //         if(a.createdAt > b.createdAt){
  //             return 1
  //         }else if(a.createdAt < b.createdAt){
  //             return -1
  //         }else {
  //             return 0
  //         }
  //     })
  
  // }
  // sortByDate(result);
  //   return result;
  // }else {
  //   return result;
  // }
  











store.subscribe(() => {
  const state = store.getState();

  console.log(getInvisibleExpenses(state.expenses, state.filters));
})

let one = store.dispatch(addExpense({id:1, description: "Buy car", amount: 500000, createdAt:-1000}));
let two = store.dispatch(addExpense({id:2, description: "Buy house", amount: 100000, createdAt:1000}));
// store.dispatch(removeExpense(one.expense.id));
// store.dispatch(editExpense(two.expense.id, { amount: 500000, description: "Mua vang"}));
// store.dispatch(setTextFilter('CAR'));
// store.dispatch(sortByDate());
// store.dispatch(sortByAmount());


// store.dispatch(setStartDate(2000));
// store.dispatch(setEndDate(-2000));
// setTimeout(()=>{
//   store.dispatch(setTextFilter('house'));
// },3000)


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default jsx;
