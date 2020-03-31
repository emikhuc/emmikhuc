import React from 'react';
import {Link} from 'react-router-dom';
import { startRemoveExpense } from '../actions/expenses';
import { connect} from  "react-redux";
/*
1. Handle event Onclick remove button
2. Call dispatch() and import action removeExpense(id)
3. Connect to store

*/
const ExpensesListItem = (props)=>(
    <div>
        <p>Description: {props.description} - Amounnt: {props.amount} - Created At: {props.createdAt}
        <button onClick={()=>props.dispatch(startRemoveExpense(props.id))}>Remove</button>
        <Link to={`/edit/${props.id}`}>Edit</Link>
        </p>
    </div>
);



export default connect()(ExpensesListItem);