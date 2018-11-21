import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import Dashboard from '../Dashboard/Dashboard';
import AddTask from '../AddTask/AddTask';
import AddUser from '../AddUser/AddUser';
import AdminInbox from '../AdminInbox/AdminInbox';

import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/dashboard" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <ProtectedRoute
              exact
              path="/dashboard"
              component={Dashboard}
            />
            <ProtectedRoute
              
              path="/addTask"
              component={AddTask}
            />
            <ProtectedRoute
              
              path="/addUser"
              component={AddUser}
            />
            <ProtectedRoute
              
              path="/AdminInbox"
              component={AdminInbox}
            />
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
