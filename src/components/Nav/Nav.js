import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import '../Style/Style.css';

const Nav = (props) => (
  <div className="nav">
        <Link to="/dashboard"><h2 className="nav-title">GroWinUp</h2></Link>
        <ul className="nav-list">
          {props.user.admin && (
            <li> 
            <Link className="nav-link" to="/dashboard">
            {props.user.admin ? 'Dashboard' : 'Login / Register'}
            </Link>
            </li>
          )}
          
          {props.user.admin && (
            <li> 
            <Link className="nav-link" to="/addUser">
            Add User
            </Link>
            </li>
          )}

          {props.user.admin && (
            <li>
            <Link className="nav-link" to="/adminInbox">
            Admin Inbox
            </Link>
          </li>
          )}

          {!props.user.admin && (
            <li>
            <Link className="nav-link" to="/childDashboard">
            Child Dashboard
            </Link>
            </li>
          )}

          {!props.user.admin && (
            <li>
            <Link className="nav-link" to="/childInbox">
            Child Inbox
            </Link>
            </li>
          )}
        </ul>
      {props.user.id && (
        <>
          <LogOutButton/>
        </>
      )}
  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
