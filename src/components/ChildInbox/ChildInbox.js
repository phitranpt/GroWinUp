import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../Style/Style.css';

import Card from '@material-ui/core/Card';
import { CardContent, Typography, TextField, FormControlLabel, CardActions } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';

class ChildInbox extends Component {

    //GET list of feedbacks from admin
    componentDidMount() {
        console.log('getting feedback list from admin', this.props.reduxState.user.id);
        const childID = this.props.reduxState.user.id;
        this.props.dispatch( { type: 'GET_FEEDBACK', payload: childID } )
    }

    render() {
        return (
            <div className="main">
                <h1>Child Inbox</h1>
                {this.props.reduxState.feedbackList.map(feedback => {
                    return (
                        <Card key={feedback.id}>
                            <CardContent>
                                <Typography className="name" gutterBottom variant="h6" component="h2">
                                    {feedback.rating}
                                </Typography>
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

export default connect(mapStateToProps)(ChildInbox);