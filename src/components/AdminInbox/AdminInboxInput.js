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
import Grid from '@material-ui/core/Grid';

const styles = theme => ({ 
    card: {
        margin: '25px',
        flexGrow: 1,
    },
    radio: {
      flexDirection: "row",
    },
    text: {
        width: 800,
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
                <Card className={classes.card}>
                    <Grid container spacing={24}>

                    <CardContent>
                        <Grid item xs={12}>
                            <Typography variant="h6" component="h2">
                                Task: {this.props.feedbackObject.task_name}
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="h6" component="h2">
                                Completed By: {this.props.feedbackObject.username}
                            </Typography>
                        </Grid>
                        <br></br>
                        <Grid item xs={6}>
                            <Typography>
                                Rate the task:
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <RadioGroup
                                value={this.state.rating}
                                onChange={this.handleChange}
                                name="rating"
                                className={classes.radio}
                                >
                                <FormControlLabel value="1" control={<Radio />} label="1" type="radio" />  
                                <FormControlLabel value="2" control={<Radio />} label="2" type="radio" />  
                                <FormControlLabel value="3" control={<Radio />} label="3" type="radio" />  
                                <FormControlLabel value="4" control={<Radio />} label="4" type="radio" />  
                                <FormControlLabel value="5" control={<Radio />} label="5" type="radio" />  
                            </RadioGroup>
                        </Grid>
                    
                        <Grid item xs={6}>
                            <TextField 
                                value={this.state.feedback}
                                onChange={this.handleChange}
                                name="feedback"
                                label="Add Feedback"
                                multiline
                                rowsMax="5"
                                rows="5"
                                margin="normal"
                                variant="outlined"
                                className={classes.text}
                                >
                            </TextField>  
                        </Grid>    
                    </CardContent>
                    </Grid>

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