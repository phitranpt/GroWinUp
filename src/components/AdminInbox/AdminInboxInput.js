import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../Style/Style.css';
import {withStyles} from '@material-ui/core/styles';
import propTypes from 'prop-types';

import { FormControlLabel, TextField, CardActions, Typography, CardContent } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const styles = theme => ({
    group: {
      margin: `${theme.spacing.unit}px 0`,
      flexDirection: "row",
    },
    text: {
        width: 300
    }
  });

class AdminInboxInput extends Component {

    state = {
        rating: '',
        feedback: '',

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    //Send feedback to child for review
    sendFeedback = (event) => {
        this.props.dispatch( { type: 'SEND_FEEDBACK_TO_CHILD', 
            payload: {
                rating: parseInt(this.state.rating),
                feedback: this.state.feedback,
                userId: this.props.feedbackObject.user_id,
                taskId: this.props.feedbackObject.task_id,
                adminId: this.props.reduxState.user.id,
                user_taskId: this.props.feedbackObject.id
            }})
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Card className="feedbackCard">
                    <CardContent>
                        <Typography className="name" gutterBottom variant="h6" component="h2">
                            {this.props.feedbackObject.task_name}
                        </Typography>

                        <Typography className="name" gutterBottom variant="h6" component="h2">
                            {this.props.feedbackObject.username}
                        </Typography>

                        <Typography className="name" gutterBottom variant="h6" component="h2">
                            Rate this task
                        </Typography>

                        <RadioGroup
                            value={this.state.rating}
                            onChange={this.handleChange}
                            name="rating"
                            className={classes.group}
                            >
                            <FormControlLabel value="1" control={<Radio />} label="1" type="radio" />  
                            <FormControlLabel value="2" control={<Radio />} label="2" type="radio" />  
                            <FormControlLabel value="3" control={<Radio />} label="3" type="radio" />  
                            <FormControlLabel value="4" control={<Radio />} label="4" type="radio" />  
                            <FormControlLabel value="5" control={<Radio />} label="5" type="radio" />  
                        </RadioGroup>

                        <TextField 
                            value={this.state.feedback}
                            onChange={this.handleChange}
                            name="feedback"
                            placeholder="Add Feedback"
                            autoComplete="off"
                            >
                        </TextField>      
                    </CardContent>

                    <CardActions>
                        <Button className="cardBtn" size="small" color="primary" onClick={() => this.sendFeedback(this.props.feedbackObject.task_id)}>
                            Send Feedback
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

AdminInboxInput.propTypes = {
    classes: propTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(AdminInboxInput));