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
                    name="radioGroup"
                    className={classes.group}
                    >
                    <FormControlLabel value="images/Elephant.png" 
                    control={<img src="images/Elephant.png" alt="elephant" width="50" height="50"/>} 
                    className="radioImage"
                    />
                    <FormControlLabel value="images/Giraffe.png" 
                    control={<img src="images/Giraffe.png" alt="Giraffe" width="50" height="50"/>} 
                    className="radioImage"
                    />
                    <FormControlLabel value="images/Hippo.png" 
                    control={<img src="images/Hippo.png" alt="Hippo" width="50" height="50"/>} 
                    className="radioImage"
                    />
                    <FormControlLabel value="images/Leopard.png" 
                    control={<img src="images/Leopard.png" alt="Leopard" width="50" height="55"/>} 
                    className="radioImage"
                    />
                    <FormControlLabel value="images/Monkey.png" 
                    control={<img src="images/Monkey.png" alt="Monkey" width="50" height="50"/>} 
                    className="radioImage"
                    />
                    <FormControlLabel value="images/Sheep.png" 
                    control={<img src="images/Sheep.png" alt="Sheep" width="50" height="50"/>} 
                    className="radioImage"
                    />
                    <FormControlLabel value="images/Zebra.png" 
                    control={<img src="images/Zebra.png" alt="Zebra" width="50" height="50"/>} 
                    className="radioImage"
                    />
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