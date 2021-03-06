import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {  startLogout } from '../actions/auth'

const Header = ({logout}) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    <button onClick={logout}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch)=> ({
  logout: () => dispatch(startLogout())
}
)

export default connect(undefined, mapDispatchToProps)(Header);
