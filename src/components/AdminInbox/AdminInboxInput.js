import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../Style/Style.css';
import { FormControlLabel, TextField, CardActions } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';

class AdminInboxInput extends Component {

    state = {
        rating: '',
        feedback: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    sendFeedback = (event) => {
        this.props.dispatch( { type: 'SEND_FEEDBACK_TO_CHILD', payload: this.state } )
        this.setState({
            rating: '',
            feedback: ''
        })
        console.log('state is:', this.state);
    }

    render() {
        return (
            <div>
                <RadioGroup
                    value={this.state.rating}
                    onChange={this.handleChange}
                    name="rating"
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
                    placeholder="Add Feedback">
                </TextField>

                <CardActions>
                    <Button className="cardBtn" size="small" color="primary" onClick={this.sendFeedback}>
                        Send Feedback
                    </Button>
                </CardActions>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(AdminInboxInput);