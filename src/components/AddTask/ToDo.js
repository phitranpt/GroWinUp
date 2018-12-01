import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { CardContent, Typography, CardActionArea } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';

class ToDo extends Component {

    render() {
        return (
            <div className="main">
                <h5>To Do</h5>
                {this.props.reduxState.todoList.map(todo => {
                    return (
                        <Card className="taskCard" key={todo.task_id}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography className="name" gutterBottom variant="h6" component="h2">
                                        <AddCircleOutline />{todo.task_name}
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

export default connect(mapStateToProps)(ToDo);