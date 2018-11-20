import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Style/Style.css';
import Card from '@material-ui/core/Card';
import { CardContent, Typography, CardActionArea } from '@material-ui/core';

class SuggestedTask extends Component {

    componentDidMount() {
        this.getSuggestedTask();
    }

    handleClick = () => {
        console.log('suggestedTask btn works!');
    }

    getSuggestedTask() {
        console.log('in getSuggestedTask');
        this.props.dispatch( { type: 'GET_TASK' } )
    }

    render() {
        return (
            <div>
                <h5>Suggested Tasks</h5>
                {this.props.reduxState.taskList.map(task => {
                    return (
                        <Card key={task.id}>
                        <CardActionArea onClick={this.handleClick}>
                            <CardContent>
                                <Typography className="suggestedTaskName" gutterBottom variant="h5" component="h2">
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