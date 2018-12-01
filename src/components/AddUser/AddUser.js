import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../Style/Style.css';
import {withStyles} from '@material-ui/core/styles';
import propTypes from 'prop-types';

import { TextField, FormControlLabel } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import swal from 'sweetalert2';

const styles = theme => ({
    group: {
      flexDirection: "row",
    },
    text: {
        width: 300,
        marginBottom: 20,
        marginTop: 20
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
        swal({
            title: 'Good Job!',
            text: 'You\'ve increased your kingdom size',
            type: 'success',
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    goBack = () => {
        this.props.history.push('/dashboard')
    }

    render() {
        const { classes } = this.props;

        return (
            <div className="main">
                <form>
                <h1>Add to Kingdom</h1>
                    <TextField 
                    label="Create User Name"
                    value={this.state.username}
                    onChange={this.handleChange}
                    name="username"
                    className={classes.text}
                    variant="outlined"
                    /><br></br>
                     <TextField 
                    label="Create Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    name="password"
                    type="password"
                    variant="outlined"
                    className={classes.text}
                    /><br></br>
                    <br></br>

                    <p>Choose Your Animal Below:</p>
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
                    <br></br>

                    <br></br>
                    <p>Are they a leader of the kingdom?</p>
                    <RadioGroup
                    value={this.state.admin}
                    onChange={this.handleChange}
                    name="admin"
                    className={classes.group}
                    >
                    <FormControlLabel value="true" control={<Radio />} label="Yes" />
                    <FormControlLabel value="false" control={<Radio />} label="No" />
                    </RadioGroup>
                    <button onClick={this.addNewPerson} className="addNewPersonBtn">Submit</button>
                    <br></br>
                    <button onClick={this.goBack} className="goBackBtn">Back</button>
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