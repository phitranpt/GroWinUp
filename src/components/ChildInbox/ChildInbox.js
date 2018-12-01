import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../Style/Style.css';
import Card from '@material-ui/core/Card';
import { CardContent, Typography, CardActionArea } from '@material-ui/core';

import UserPage from '../UserPage/UserPage';

class ChildInbox extends Component {

    //GET list of feedbacks from admin
    componentDidMount() {
        console.log('getting feedback list from admin', this.props.reduxState.user.id);
        const childID = this.props.reduxState.user.id;
        this.props.dispatch( { type: 'GET_FEEDBACK', payload: childID } )
    }

    //DELETE selected feedback from list
    handleClick = (id) => {
        console.log('feedback id is:', id);
        this.props.dispatch(
            {type: 'DELETE_FEEDBACK', 
            payload: {
                feedbackId: id,
                userId: this.props.reduxState.user.id
            }})
    }

    render() {
        return (
            <div className="main">
                <h1>Child Inbox</h1>
                <UserPage />
                {this.props.reduxState.feedbackList.map(feedback => {
                    return (
                        <Card key={feedback.id}>
                            <CardActionArea onClick={() => this.handleClick(feedback.id)}>
                                <CardContent>
                                    <Typography className="name" gutterBottom variant="h6" component="h2">
                                        {feedback.rating}
                                    </Typography>
                                    <Typography className="name" gutterBottom variant="h6" component="h2">
                                        {feedback.feedback}
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

export default connect(mapStateToProps)(ChildInbox);