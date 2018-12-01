import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Style/Style.css';
import Card from '@material-ui/core/Card';
import { Typography, CardActionArea } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import propTypes from 'prop-types';
import { AddCircleOutline } from '@material-ui/icons';

const styles = theme => ({
    icon: {
        height: '40px',
        width: '40px',
        marginRight: '20px',
        marginTop: '10px'
    },
    textfield: {
        height: '65px',
    },
    inline: {
        position: 'relative',
        fontSize: '20px',
        marginLeft: '20px',
    }
  });

class ChildDashboard extends Component {

    //GET a list of todo for the child dashboard
    componentDidMount() {
        console.log('getting todo list for person', this.props.reduxState.user.id);
        const childId = this.props.reduxState.user.id;
        this.props.dispatch( { type: 'GET_TODO', payload: childId} );
    }

    //Task is completed. Set completed as true
    sendFeedbackToAdmin = (id) => {
        console.log('task id is:', id);
        console.log('user id is:', this.props.reduxState.user.id);
        this.props.dispatch( 
            {type: 'ADD_FEEDBACK_TO_ADMIN', 
            payload: {
                completeTaskId: id,
                completeUserId: this.props.reduxState.user.id,
            }});
    }

    render() {

        const { classes } = this.props;

        return (
            <div className="main">
                <h1>Welcome {this.props.reduxState.user.username}!</h1>
                <h4>Task List</h4>
                {this.props.reduxState.todoList.map(todo => {
                    return (
                        <Card className={classes.textfield} key={todo.id}>
                            <CardActionArea onClick={() => this.sendFeedbackToAdmin(todo.task_id)}>
                                <Typography className={classes.inline}>
                                    <AddCircleOutline className={classes.icon} />{todo.task_name}
                                </Typography>
                            </CardActionArea>
                        </Card>
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

ChildDashboard.propTypes = {
    classes: propTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(ChildDashboard));