import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import EditExpense, { editExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  console.log(props.expense);
  return (
    <div>
      <ExpenseForm exp={props.expense} onSubmit={(expEdited)=>{
        props.dispatch(editExpense(props.expense.id, expEdited));
        props.history.push("/");
      }}/>
      
    </div>
  );
};
const MapStateToProps = (state, props) =>{
  
  
  
  return{
    expense: state.expenses.find((exp)=>{
      return exp.id === parseInt(props.match.params.id)
  })
}}


export default connect(MapStateToProps)(EditExpensePage);
