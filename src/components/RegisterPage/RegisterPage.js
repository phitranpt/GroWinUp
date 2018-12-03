import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import propTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import '../Style/Style.css';

const styles = theme => ({
  group: {
    margin: `${theme.spacing.unit}px 0`,
    flexDirection: "row",
  },
  text: {
      width: 260
  }
});

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {

    const { classes } = this.props;

    return (
      <div className="login-form">
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <img src="/images/Zebra.png" 
            width="250" 
            height="280" 
            alt="vulture"
            className="login-picture"
            />
            <h1 className="title">GroWinUp</h1>
          <br></br>
          <div>
          <img src="images/Face.png" alt="face" width="25" height="25" className="icon" />
              <TextField
                type="text"
                name="username"
                placeholder="Create Username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
                className={classes.text}
              />
          </div>
          <br></br>
          <div>
              <img src="images/Lock.png" alt="lock" width="25" height="25" className="icon" />  
              <TextField
                type="password"
                name="password"
                placeholder="Create Password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
                className={classes.text}
              />
          </div>
          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Back
          </button>
        </center>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
});

RegisterPage.propTypes = {
  classes: propTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(RegisterPage));

