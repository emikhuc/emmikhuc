import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {startAddExpense} from '../actions/expenses'
/*
1. create a new component name: ExpenseForm.js
2. form includes: input type="text" name="description", input type="float"
expenseForm
3. connect to store, import AddExpense from action
4. handle event onSubmit; e.preventDefault(); props.dispatch(addExpense({description: e.target.description.value, amount: e.target.amount.value}))
5. button submit
*/

const AddExpensePage = (props) => {
  return(
    <div>

      <h1>Add Expense</h1>
      <ExpenseForm onSubmit ={(expense)=>{
        props.dispatch(startAddExpense(expense));
        props.history.push("/");
        
      }}/>
    </div>
  )
};

export default connect()(AddExpensePage);

