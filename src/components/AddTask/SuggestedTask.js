import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { CardContent, Typography, CardActionArea } from '@material-ui/core';

class SuggestedTask extends Component {

    handleClick = () => {
        console.log('suggestedTask btn works!');
    }

    render() {
        return (
            <div>
                <h5>Suggested Tasks</h5>
                    <Card>
                        <CardActionArea onClick={this.handleClick}>
                            <CardContent>
                                <Typography className="name" gutterBottom variant="h5" component="h2">
                                    Trash
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(SuggestedTask);