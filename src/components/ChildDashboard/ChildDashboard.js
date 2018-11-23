import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Style/Style.css';
import Card from '@material-ui/core/Card';
import { CardContent, Typography, CardActionArea } from '@material-ui/core';

import UserPage from '../UserPage/UserPage';

class ChildDashboard extends Component {

    // componentDidMount() {
    //     console.log('getting todo list for person', this.props.reduxState.user.id);
    //     const childId = this.props.reduxState.user.id;
    //     this.props.dispatch( { type: 'GET_TODO', payload: childId} )
    // }

    // sendFeedbackToAdmin = (task_name) => {
    //     console.log('btn works', task_name);
    //     this.props.dispatch( { type: 'ADD_FEEDBACK_TO_ADMIN', payload: task_name } )
    // }

    render() {
        return (
            <div>
                <h1>Child Dashboard</h1>
                <UserPage />
                {this.props.reduxState.todoList.map(todo => {
                    return (
                        <Card className="taskCard" key={todo.id}>
                            <CardActionArea onClick={() => this.sendFeedbackToAdmin()}>
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