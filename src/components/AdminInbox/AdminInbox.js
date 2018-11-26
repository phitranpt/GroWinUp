import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../Style/Style.css';
import Card from '@material-ui/core/Card';
import { CardContent, Typography, CardActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import AdminInboxInput from './AdminInbox';

class AdminInbox extends Component {

    state = {
        feedback: '',
        rating: ''
    }


    //GET list of completed task pending for feedback
    componentDidMount() {
        console.log('getting completed todo list from child');
        this.props.dispatch( { type: 'GET_COMPLETED_TASK'} )
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    //Send feedback to child inbox
    sendFeedback = (event) => {
        event.preventDefault();
        console.log('in sendFeedback', this.state)
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

                            <CardActions>
                                <Button className="cardBtn" size="small" color="primary" onClick={this.sendFeedback}>
                                    Send Feedback
                                </Button>
                            </CardActions>
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