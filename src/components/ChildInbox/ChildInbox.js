import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../Style/Style.css';

// import Card from '@material-ui/core/Card';
// import { CardContent, Typography, TextField, FormControlLabel, CardActions } from '@material-ui/core';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Button from '@material-ui/core/Button';

class ChildInbox extends Component {

    render() {
        return (
            <div>
                <h1>Child Inbox</h1>
                {/* {this.props.reduxState.completeList.map(feedback => {
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

                                <RadioGroup
                                value={this.state.rating}
                                onChange={this.handleChange}
                                name="rating"
                                >
                                <FormControlLabel value="1" control={<Radio />} label="1" />  
                                <FormControlLabel value="2" control={<Radio />} label="2" />  
                                <FormControlLabel value="3" control={<Radio />} label="3" />  
                                <FormControlLabel value="4" control={<Radio />} label="4" />  
                                <FormControlLabel value="5" control={<Radio />} label="5" />  
                                </RadioGroup>

                                <TextField 
                                value={this.state.feedback}
                                onChange={this.handleChange}
                                name="feedback"
                                className="feedbackTextField" 
                                placeholder="Add Feedback">
                                </TextField>
                            </CardContent>

                            <CardActions>
                                <Button className="cardBtn" size="small" color="primary">
                                    Delete Feedback
                                </Button>
                            </CardActions>
                        </Card>
                    )
                })} */}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(ChildInbox);