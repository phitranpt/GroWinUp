import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Style/Style.css';
import Card from '@material-ui/core/Card';
import { CardContent, Typography, CardActionArea } from '@material-ui/core';

import UserPage from '../UserPage/UserPage';

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
        return (
            <div className="main">
                <UserPage />
                {this.props.reduxState.todoList.map(todo => {
                    return (
                        <Card className="taskCard" key={todo.id}>
                            <CardActionArea onClick={() => this.sendFeedbackToAdmin(todo.task_id)}>
                                <CardContent>
                                    <Typography className="name" gutterBottom variant="h6" component="h2">
                                        {todo.task_name}
                                    </Typography>
                                </CardContent>
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

export default connect(mapStateToProps)(ChildDashboard);