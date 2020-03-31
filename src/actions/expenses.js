// ADD_EXPENSE
import database from '../firebase/firebase';
import uuid from 'uuid';
// const uuidv1 = require('uuid/v1');
export const addExpense = (expense) => {
    return {
      type: 'ADD_EXPENSE',
      expense
  
    }
  }
  export const startAddExpense = (dataExpense = {})  => {
    const {description, amount, createdAt=5000} = dataExpense;
    const expense = {description, amount, createdAt}
    //1. return dispatch funciton
    // connect to firebase
    //
    console.log("start addexpenses");
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      console.log("start dispatch");
      return database
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then((ref)=>{
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }))
      })
      .catch((err)=>{
        console.log(err);
      })
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
//set
export const setExpenses = (expenses) =>{
  return {
    type: "SET_EXPENSES",
    expenses
  }
};

export const startSetExpenses = () =>   {
  return (dispatch, getState) => {
    const uid=getState().auth.uid;
    let expenses = [];
    //get data from database
    return database
    .ref(`users/${uid}/expenses`)
    .once("value")
    .then((dataSnapshot)=>{
      dataSnapshot.forEach(childSnapshot => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })
      return expenses;
    })
    .then((expenses)=>{
      //push data to store Redux
      dispatch(setExpenses(expenses));
    })
    .catch((err)=>{
      console.log("err");
    })
  }
};

export const startRemoveExpense = (id) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    console.log("start dispatch");
    return database
    .ref(`users/${uid}/expenses/${id}`)
    .remove()
    .then(()=>{
      dispatch(removeExpense(id));
    })
    .catch(err => console.log("err"));
  }
}

export const startEditExpense = (id, updates) =>{
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    console.log("start dispatch");
    return database
    .ref(`users/${uid}/expenses/${id}`)
    .set(updates).then(()=>{
      dispatch(editExpense(id, updates));
    }).catch(err=>console.log("err"));
  }
}
