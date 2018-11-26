import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../Style/Style.css';

import { FormControlLabel, TextField } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';


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

    render() {
        return (
            <div className="main">
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
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(AdminInboxInput);