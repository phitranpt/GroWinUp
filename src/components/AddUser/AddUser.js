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

    addNewUser = (event) => {
        event.preventDefault();
        this.props.dispatch( { type: 'ADD_USER' } )
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

    handleCheck = name => event => {
        this.setState({
            [name]: event.target.checked
        })
    }

    render() {
        return (
            <div>
                <h1>Add User Page</h1>
                <form onSubmit={this.addNewUser}>
                    <TextField 
                    label="Create User Name"
                    value={this.state.username}
                    onChange={this.handleChange}
                    margin="normal"
                    name="username"
                    /><br></br>
                     <TextField 
                    label="Create New Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    margin="normal"
                    name="password"
                    /><br></br>
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