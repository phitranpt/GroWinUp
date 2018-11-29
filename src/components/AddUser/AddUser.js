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

const newPerson = {
        username: '',
        password: '',
        profile_image: '',
        admin: ''
}

class AddUser extends Component {

    state = newPerson;

    //Register new user
    addNewPerson = (event) => {
        event.preventDefault();
        this.props.dispatch( 
            {type: 'REGISTER_NEW_PERSON', 
                payload: {
                    username: this.state.username,
                    password: this.state.password,
                    profile_image: this.state.profile_image,
                    admin: this.state.admin,
                    adminId: this.props.reduxState.user.id
                }})
        this.setState(newPerson)
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
                <h1>Add New User</h1>
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
                    <FormControlLabel value="images/Elephant.png" control={<Radio/>} label="Elephant" />
                    <FormControlLabel value="images/Giraffe.png" control={<Radio/>} label="Giraffe" />
                    <FormControlLabel value="images/Hippo.png" control={<Radio/>} label="Hippo" />
                    <FormControlLabel value="images/Leopard.png" control={<Radio/>} label="Leopard" />
                    <FormControlLabel value="images/Monkey.png" control={<Radio/>} label="Monkey" />
                    <FormControlLabel value="images/Sheep.png" control={<Radio/>} label="Sheep" />
                    <FormControlLabel value="images/Zebra.png" control={<Radio/>} label="Zebra" />
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