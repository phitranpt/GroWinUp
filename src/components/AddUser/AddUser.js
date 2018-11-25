import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../Style/Style.css';

import { TextField, FormControlLabel } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

class AddUser extends Component {

    state = {
        username: '',
        password: '',
        profile_image: '',
        admin: ''
    }

    // register new user
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
        return (
            <div className="main">
                <h1>Add User Page</h1>
                <form onSubmit={this.addNewPerson}>
                    <TextField 
                    label="Create User Name"
                    value={this.state.username}
                    onChange={this.handleChange}
                    margin="normal"
                    name="username"
                    type="text"
                    /><br></br>
                     <TextField 
                    label="Create New Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    margin="normal"
                    name="password"
                    type="password"
                    /><br></br>

                    <RadioGroup
                    value={this.state.profile_image}
                    onChange={this.handleChange}
                    name="profile_image"
                    className="adminAvatar"
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
                    className="adminRadio"
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

export default connect(mapStateToProps)(AddUser);