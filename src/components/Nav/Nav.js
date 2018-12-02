import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import '../Style/Style.css';
import 'typeface-eczar';

const Nav = (props) => (

  <div>
    {props.user.id && (
      <div className="nav">
            <Link to="/dashboard"><h2 className="nav-title">GroWinUp</h2></Link>
            <br></br>
            <img src={props.user.profile_image} alt="profile" width="150" height="150" className="nav-image"/>
            <br></br>
            <ul className="nav-list">
              {props.user.admin && props.user.id && (
                <li>
                <img src="/images/Dashboard.png" alt="dashboard" width="20" height="20" className="icon"/>
                <Link className="nav-link" to="/dashboard">
                {props.user.admin ? 'Kingdom' : 'Login / Register'}
                </Link>
                </li>
              )}
              
              {props.user.admin && props.user.id && (
                <li>
                <img src="/images/AddPerson.png" alt="add person" width="20" height="20" className="icon"/> 
                <Link className="nav-link" to="/addUser">
                Add Animal
                </Link>
                </li>
              )}

              {props.user.admin && props.user.id && (
                <li>
                <img src="/images/AdminInbox.png" alt="admin inbox" width="20" height="20" className="icon"/> 
                <Link className="nav-link" to="/adminInbox">
                Inbox
                </Link>
              </li>
              )}

              {!props.user.admin && props.user.id && (
                <li>
                <img src="/images/Dashboard.png" alt="dashboard" width="20" height="20" className="icon"/>
                <Link className="nav-link" to="/childDashboard">
                Dashboard
                </Link>
                </li>
              )}

              {!props.user.admin && props.user.id && (
                <li>
                <img src="/images/AdminInbox.png" alt="child inbox" width="20" height="20" className="icon"/>
                <Link className="nav-link" to="/childInbox">
                Inbox
                </Link>
                </li>
              )}
              {props.user.id && (
                <li>
                <img src="/images/Logout.png" alt="log out" width="20" height="20" className="icon"/>
                <LogOutButton className="logout-link"/>
                </li>
              )}
          </ul>
      </div>
    )}
</div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
