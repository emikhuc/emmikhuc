import React from 'react';
import ExpensesList from './ExpensesList';
import ExpensesListFilter from './ExpensesListFilter';


const ExpenseDashboardPage = () => (
  <div>
    <ExpensesList/>
    <ExpensesListFilter/>
  </div>
);

export default ExpenseDashboardPage;
