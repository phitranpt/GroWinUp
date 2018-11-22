import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import { HashRouter as Router, Link } from "react-router-dom";

const newTask = {
    task_name: '',
}

class AddNewTask extends Component {

    state = newTask;

    addNewTask = (event) => {
        event.preventDefault();
        this.props.dispatch( { type: 'ADD_NEW_TASK', payload: this.state } )
        this.setState(newTask);
        console.log('in addNewTask', this.state);
        
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <h1>Add New Task</h1>
                
                <Router>
                    <Link to="/addTask">Back</Link>
                </Router>

                <form onSubmit={this.addNewTask}>
                    <TextField 
                    label="Enter a new task"
                    value={this.state.task_name}
                    onChange={this.handleChange}
                    margin="normal"
                    name="task_name"
                    /><br></br>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(AddNewTask);