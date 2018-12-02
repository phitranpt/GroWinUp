import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../Style/Style.css';
import Card from '@material-ui/core/Card';
import { CardContent, Typography, Button, CardActions } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import propTypes from 'prop-types';
import swal from 'sweetalert2';

const styles = theme => ({ 
    card: {
        margin: '25px'
    }
  });

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
        swal({
            title: 'Done with feedback?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes!',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if(result.value) {
                this.props.dispatch(
                    {type: 'DELETE_FEEDBACK', 
                    payload: {
                        feedbackId: id,
                        userId: this.props.reduxState.user.id
                    }})
                    swal({
                        title: 'Done!',
                        text: 'Keep up the great work!',
                        type: 'success'
                    })
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal({
                    title: 'Okay!',
                    text: 'Your feedback is safe',
                    type: 'info'
                })
            }
        })
    }

    render() {

        const { classes } = this.props;

        return (
            <div className="main">
                <h1>Inbox</h1>
                {this.props.reduxState.feedbackList.map(feedback => {
                    return (
                        <Card key={feedback.id} className={classes.card}>
                                <CardContent>
                                    <Typography className="name" gutterBottom variant="h6" component="h2">
                                        Your Task: {feedback.task_name}
                                    </Typography>
                                    <Typography className="name" gutterBottom variant="h6" component="h2">
                                        Your rating: {feedback.rating}
                                    </Typography>
                                    <Typography className="name" gutterBottom variant="h6" component="h2">
                                        Feedback: {feedback.feedback}
                                    </Typography>
                                </CardContent>
                            <CardActions>
                                <Button size="small" color="secondary" onClick={() => this.handleClick(feedback.id)}>
                                    Done
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

ChildInbox.propTypes = {
    classes: propTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(ChildInbox));