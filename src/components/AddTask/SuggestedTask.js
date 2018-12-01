import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Style/Style.css';
import Card from '@material-ui/core/Card';
import { Typography, CardActionArea } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
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
        height: '65px',
    },
    inline: {
        position: 'relative',
        fontSize: '20px',
        marginLeft: '20px',
    }
  });

class SuggestedTask extends Component {

    handleClick = (id) => {
        console.log('task id', id);
        console.log('user id', this.props.reduxState.personIdList);
        this.props.dispatch( 
            {type: 'ADD_TASK_TO_USER', 
            payload: {
                taskId: id,
                userId: this.props.reduxState.personIdList
            }})
    }

    render() {

        const { classes } = this.props;

        return (
            <div className="main">
                <h4>Suggested Tasks</h4>
                {this.props.reduxState.taskList.map(task => {
                    return (
                        <Card className={classes.textfield} key={task.id}>
                            <CardActionArea onClick={()=> this.handleClick(task.id)}>
                                <Typography className={classes.inline}>
                                    <AddCircleOutline className={classes.icon} />{task.task_name}
                                </Typography>
                            </CardActionArea>
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

SuggestedTask.propTypes = {
    classes: propTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(SuggestedTask));