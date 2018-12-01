import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import swal from 'sweetalert2';

import '../Style/Style.css';

const newTask = {
    task_name: '',
}

const styles = theme => ({
    textField: {
        width: 295,
    }
  });

class AddNewTask extends Component {

    state = newTask;

    addNewTask = (event) => {
        event.preventDefault();
        this.props.dispatch( { type: 'ADD_NEW_TASK', payload: this.state } )
        this.setState(newTask);
        console.log('in addNewTask', this.state);
        swal({
            title: 'Good Job!',
            text: 'There is so much to do in your kingdom!',
            type: 'success',
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    goBack = () => {
        this.props.history.push('/addTask')
    }

    render() {

        const { classes } = this.props;

        return (
            <div className="main">
                <form onSubmit={this.addNewTask}>
                    <h1>Add a New Task</h1>
                    <br></br>
                    <TextField 
                    label="New Task to Add"
                    value={this.state.task_name}
                    onChange={this.handleChange}
                    margin="normal"
                    name="task_name"
                    autoComplete="off"
                    variant="outlined"
                    className={classes.textField}
                    />
                    <br></br>
                    <input type="submit" className="addNewTaskBtn"/>
                    <br></br>
                    <button onClick={this.goBack} className="goBackBtn">Back</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

AddNewTask.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default connect(mapStateToProps)(withStyles(styles)(AddNewTask));