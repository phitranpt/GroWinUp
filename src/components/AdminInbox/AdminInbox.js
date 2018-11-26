import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../Style/Style.css';

import AdminInboxInput from './AdminInboxInput';
import Card from '@material-ui/core/Card';
import { Typography, CardContent } from '@material-ui/core';

class AdminInbox extends Component {

    //GET list of completed task pending for feedback
    componentDidMount() {
        console.log('getting completed todo list from child');
        this.props.dispatch( { type: 'GET_COMPLETED_TASK'} )
    }

    render() {
        return (
            <div className="main">
                <h1>Admin Inbox</h1>
                {this.props.reduxState.completeList.map(feedback => {
                    return (
                        <Card className="feedbackCard" key={feedback.id}>
                            <CardContent>
                                <Typography className="name" gutterBottom variant="h6" component="h2">
                                    {feedback.task_name}
                                </Typography>

                                <Typography className="name" gutterBottom variant="h6" component="h2">
                                    {feedback.username}
                                </Typography>

                                <Typography className="name" gutterBottom variant="h6" component="h2">
                                    Rate this task
                                </Typography>
                                
                                <AdminInboxInput />
                            </CardContent>
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

export default connect(mapStateToProps)(AdminInbox);