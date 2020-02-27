import React from 'react';
import { connect}  from 'react-redux';
import ExpensesListItem from './ExpensesListItem';
import selectedExpenses from '../selectors/expenses';


const ExpensesList = (props) => (
    <div className="list">
        <h3>
            These are expenses list
        </h3>
        {props.expenses.map((exp)=>{
            return <ExpensesListItem key={exp.id} {...exp}/>
        })}
        
    </div>
);

const mapStateToProps = (state)=>{
    return{
        expenses: selectedExpenses(state.expenses, state.filters)
    }
}



const ConnectedExpensesList = connect(mapStateToProps)(ExpensesList); //Higher of component (HOC)

export default ConnectedExpensesList;