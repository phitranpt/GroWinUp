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
import AddNewTask from '../AddTask/AddNewTask';
import ChildDashboard from '../ChildDashboard/ChildDashboard';

import './App.css';
import ChildInbox from '../ChildInbox/ChildInbox';

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
              path="/addNewTask"
              component={AddNewTask}
            />
            <ProtectedRoute
              path="/addUser"
              component={AddUser}
            />
            <ProtectedRoute
              path="/adminInbox"
              component={AdminInbox}
            />
            <ProtectedRoute
              path="/childDashboard"
              component={ChildDashboard}
            />
            <ProtectedRoute
              path="/childInbox"
              component={ChildInbox}
            />
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
