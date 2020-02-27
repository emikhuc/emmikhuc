import React from 'react';
import ExpensesListItem from './ExpensesListItem';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount} from '../actions/filters';
/*
1. import sortByDate, sortByAmount
2. Handle event onChange => dispatch, check condition

*/
const ExpensesListFilter = (props) => {
    return(
        <div className="filter">
            <input type="text" value = {props.filter.text} onChange={(e)=>{
                props.dispatch(setTextFilter(e.target.value));
                console.log(e.target.value);
            }}/>
            <select onChange={(e)=>{
                if(e.target.value==="amount"){
                    
                        props.dispatch(sortByAmount())
                    }else if(e.target.value==="date"){
                        
                            props.dispatch(sortByDate())
                        }
                // console.log(e.target.value)
                    }
                }
            value={props.filter.sortBy}
            >
                <option value="amount">By Amount</option>
                <option value="date">By Date</option>
            </select>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        filter: state.filters
    }
}



export default connect(mapStateToProps)(ExpensesListFilter);

