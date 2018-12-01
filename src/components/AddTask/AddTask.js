import React, { Component } from 'react';
import { connect } from 'react-redux';
import SuggestedTask from './SuggestedTask';
import ToDo from './ToDo';
import { LibraryAddOutlined } from '@material-ui/icons';
import {withStyles} from '@material-ui/core/styles';
import propTypes from 'prop-types';

const styles = theme => ({
    icon: {
        height: '40px',
        width: '40px',
        marginTop: 20,
        display: 'inline'
    }
  });

class AddTask extends Component {

    addNewTask = () => {
        this.props.history.push('/addNewTask')
    }

    render() {

        const { classes } = this.props;

        return (
            <div className="main">
                <LibraryAddOutlined onClick={this.addNewTask} className={classes.icon}/>
                <SuggestedTask />
                <ToDo />
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

AddTask.propTypes = {
    classes: propTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(AddTask));