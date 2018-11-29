import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Style/Style.css';
import Card from '@material-ui/core/Card';
import { CardContent, Typography, CardActionArea } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';

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
        return (
            <div className="main">
                <h5>Suggested Tasks</h5>
                {this.props.reduxState.taskList.map(task => {
                    return (
                        <Card className="taskCard" key={task.id}>
                            <CardActionArea onClick={()=> this.handleClick(task.id)}>
                                <CardContent>
                                    <Typography className="name" gutterBottom variant="h6" component="h2">
                                    {task.task_name}
                                    </Typography>
                                </CardContent>
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

export default connect(mapStateToProps)(SuggestedTask);