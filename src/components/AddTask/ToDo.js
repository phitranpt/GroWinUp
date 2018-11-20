import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { CardContent, Typography, CardActionArea } from '@material-ui/core';

class ToDo extends Component {

    componentDidMount() {
        console.log('in todo list');
        this.props.dispatch( { type: 'GET_TODO' } )
    }

    render() {
        return (
            <div>
                <h5>To Do</h5>
                {this.props.reduxState.todoList.map(todo => {
                    return (
                        <Card key={todo.id}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography className="name" gutterBottom variant="h5" component="h2">
                                        {todo.task_name}
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