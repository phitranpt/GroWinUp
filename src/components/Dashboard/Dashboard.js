import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Style/Style.css';
import Card from '@material-ui/core/Card';
import { CardContent, Typography, CardActions, CardActionArea, CardMedia } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class Dashboard extends Component {

    addTask = () => {
        console.log('addTask works!');
    }

    cardAction = () => {
        console.log('cardAction works!');
    }

    deleteProfile = () => {
        console.log('delete btn!');   
    }

    render() {
        return (
            <div>
                <h1>This is the Dashboard</h1>
                <Card className="card">
                    <CardActionArea onClick={this.cardAction}>
                        <CardMedia
                            className="cardImage"
                            image={require ("../../Media/phitran.jpg")}
                            title="Profile Image"
                        />
                        <CardContent>
                            <Typography className="name" gutterBottom variant="h5" component="h2">
                                Phi Tran
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                        <CardActions>
                            <Button className="cardBtn" size="small" color="primary" onClick={this.addTask}>
                                Add Task
                            </Button>
                            <Button className="cardBtn" size="small" color="secondary" onClick={this.deleteProfile}>
                                Delete
                            </Button>
                        </CardActions>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Dashboard);