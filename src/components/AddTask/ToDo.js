import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import { QueryBuilder } from '@material-ui/icons';
import {withStyles} from '@material-ui/core/styles';
import propTypes from 'prop-types';

const styles = theme => ({
    icon: {
        height: '40px',
        width: '40px',
        marginRight: '20px',
        marginTop: '10px'
    },
    textfield: {
        height: '66px'
    },
    inline: {
        position: 'relative',
        fontSize: '20px',
        marginLeft: '20px',
    }
  });

class ToDo extends Component {

    render() {

        const { classes } = this.props;

        return (
            <div className="main">
                <h4>To Do</h4>
                {this.props.reduxState.todoList.map(todo => {
                    return (
                        <Card className={classes.textfield} key={todo.task_id}>
                            <Typography className={classes.inline}>
                                <QueryBuilder className={classes.icon}/>{todo.task_name}
                            </Typography>
                        </Card>
                        )
                    })}
                </div>
            );
        }
    }

const mapStateToProps = reduxState => ({
    reduxState,
});

ToDo.propTypes = {
    classes: propTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(ToDo));