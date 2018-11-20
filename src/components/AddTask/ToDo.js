import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { CardContent, Typography, CardActionArea } from '@material-ui/core';

class ToDo extends Component {

    render() {
        return (
            <div>
                <h5>To Do</h5>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography className="name" gutterBottom variant="h5" component="h2">
                                    Laundry
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

export default connect(mapStateToProps)(ToDo);