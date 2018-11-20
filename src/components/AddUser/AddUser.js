import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';

class AddUser extends Component {

    state = {
        username: '',
        password: '',
        profile_image: '',
        admin: ''
    }

    handleChange = (event) => {
        console.log('in username form', event);
    }

    render() {
        return (
            <div>
                <h1>Add User Page</h1>
                <form className="userForm">
                    <TextField 
                    required
                    label="Create User Name"
                    // value={this.state.username}
                    onChange={this.handleChange}
                    margin="normal"
                    /><br></br>
                     <TextField 
                    required
                    label="Create New Password"
                    // value={this.state.username}
                    onChange={this.handleChange}
                    margin="normal"
                    />
                </form>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(AddUser);