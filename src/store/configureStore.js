import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import expensesReducers from '../reducers/expenses';
import filtersReducers from '../reducers/filters';
import authReducers from '../reducers/auth';


export default () => {
    const store = createStore(combineReducers({
        expenses: expensesReducers,
        filters: filtersReducers,
        auth: authReducers
      }), applyMiddleware(thunk));
    return store;
}






  