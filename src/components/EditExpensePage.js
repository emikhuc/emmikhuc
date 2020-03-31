import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import EditExpense, { startEditExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  console.log(props.expense);
  return (
    <div>
      <ExpenseForm exp={props.expense} onSubmit={(expEdited)=>{
        props.dispatch(startEditExpense(props.expense.id, expEdited));
        props.history.push("/");
      }}/>
      
    </div>
  );
};
const MapStateToProps = (state, props) =>{
  
  
  
  return{
    expense: state.expenses.find((exp)=>{
      return exp.id === props.match.params.id
  })
}}


export default connect(MapStateToProps)(EditExpensePage);
