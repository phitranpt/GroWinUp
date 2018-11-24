import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => (
  <div className="nav">
    <Link to="/dashboard"><h2 className="nav-title">GroWinUp</h2></Link>

    {/* This is the navigation links to the right */}
    <div className="nav-right">
      <Link className="nav-link" to="/dashboard">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'Dashboard' : 'Login / Register'}
      </Link>
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          <Link className="nav-link" to="/addUser">
            Add User
          </Link>
          <Link className="nav-link" to="/adminInbox">
            Admin Inbox
          </Link>
          <Link className="nav-link" to="/childDashboard">
            Child Dashboard
          </Link>
          <Link className="nav-link" to="/childInbox">
            Child Inbox
          </Link>
          <LogOutButton className="nav-link"/>
        </>
      )}
    </div>

  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
