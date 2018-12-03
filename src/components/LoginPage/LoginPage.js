import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import propTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import '../Style/Style.css';
import 'typeface-eczar';

const styles = theme => ({
  group: {
    margin: `${theme.spacing.unit}px 0`,
    flexDirection: "row",
  },
  text: {
      width: 260
  }
});

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="login-form">
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
        <form onSubmit={this.login}>
          <img src="/images/Hippo.png" 
            width="250" 
            height="280" 
            alt="bluefish"
            className="login-picture"
            />
            <h1 className="title">GroWinUp</h1>
          <br></br>
          <div>
              <img src="images/Face.png" alt="face" width="25" height="25" className="icon" />
              <TextField
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
                className={classes.text}
                autoComplete="off"
              />
          </div>
          <br></br>
          <div>
              <img src="images/Lock.png" alt="lock" width="25" height="25" className="icon" />  
              <TextField
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
                className={classes.text}
                autoComplete="off"
              />
          </div>
          <div>
            <input
              className="log-in"
              type="submit"
              name="submit"
              value="Log In"
            />
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
          >
            Register
          </button>
        </center>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  user: state.user
});

LoginPage.propTypes = {
  classes: propTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(LoginPage));
