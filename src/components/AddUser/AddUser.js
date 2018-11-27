import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../Style/Style.css';
import {withStyles} from '@material-ui/core/styles';
import propTypes from 'prop-types';

import { TextField, FormControlLabel } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const styles = theme => ({
    group: {
      margin: `${theme.spacing.unit}px 0`,
      flexDirection: "row",
    },
    text: {
        width: 300
    }
  });

class AddUser extends Component {

    state = {
        username: '',
        password: '',
        profile_image: '',
        admin: ''
    }

    //Register new user
    addNewPerson = (event) => {
        event.preventDefault();
        this.props.dispatch( { type: 'REGISTER_NEW_PERSON', payload: this.state } )
        this.setState({
            username: '',
            password: '',
            profile_image: '',
            admin: ''
        })
        console.log('state', this.state);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <div className="main">
                <form onSubmit={this.addNewPerson}>
                <h1>Add new user</h1>
                    <TextField 
                    label="Create User Name"
                    value={this.state.username}
                    onChange={this.handleChange}
                    margin="normal"
                    name="username"
                    type="text"
                    className={classes.text}
                    /><br></br>
                     <TextField 
                    label="Create Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    margin="normal"
                    name="password"
                    type="password"
                    className={classes.text}
                    /><br></br>

                    <RadioGroup
                    value={this.state.profile_image}
                    onChange={this.handleChange}
                    name="profile_image"
                    className={classes.group}
                    >
                    <FormControlLabel value="avatar1" control={<Radio />} label="Blue Fish" />
                    <FormControlLabel value="avatar2" control={<Radio />} label="Crab" />
                    <FormControlLabel value="avatar3" control={<Radio />} label="Green Fish" />
                    <FormControlLabel value="avatar4" control={<Radio />} label="Owl" />
                    <FormControlLabel value="avatar5" control={<Radio />} label="Vulture" />
                    </RadioGroup>

                    <RadioGroup
                    value={this.state.admin}
                    onChange={this.handleChange}
                    name="admin"
                    className={classes.group}
                    >
                    <FormControlLabel value="true" control={<Radio />} label="Admin" />
                    <FormControlLabel value="false" control={<Radio />} label="Child" />
                    </RadioGroup>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

AddUser.propTypes = {
    classes: propTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(AddUser));