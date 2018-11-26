import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Style/Style.css';
import Card from '@material-ui/core/Card';
import { CardContent, Typography, CardActions, CardActionArea, CardMedia } from '@material-ui/core';

import Button from '@material-ui/core/Button';

import UserPage from '../UserPage/UserPage';

class Dashboard extends Component {

    //navigates admin to users addTask page
    addTask = (id) => {
        console.log('addTask works!', id);
        this.props.dispatch( { type: 'GET_TODO', payload: id } )
        this.props.dispatch( { type: 'GET_TASK' } )
        this.props.history.push('/addTask')
    }

    //DELETE person from list
    deleteProfile = (id) => {
        console.log('delete btn!');
        this.props.dispatch( { type: 'DELETE_PERSON', payload: id} )
    }

    //GET list of people
    componentDidMount() {
        this.props.dispatch( { type: 'GET_PERSON' } )
    }

    render() {
        return (
            <div className="main">
                <h1>This is the Dashboard</h1>
                <UserPage />
                {this.props.reduxState.personList.map(person => {
                    return (
                        <Card className="card" key={person.id} >
                            <CardActionArea onClick={this.cardAction}>
                                 <CardMedia
                                className="cardImage"
                                image={require ("../../Media/phitran.jpg")} 
                                title="Profile Image"
                                />
                                <CardContent>
                                    <Typography className="name" gutterBottom variant="h5" component="h2">
                                        {person.username}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                                <CardActions>
                                    <Button className="cardBtn" size="small" color="primary" onClick={()=> this.addTask(person.id)}>
                                        Add Task
                                    </Button>
                                    <Button className="cardBtn" size="small" color="secondary" onClick={()=> this.deleteProfile(person.id)}>
                                         Delete
                                    </Button>
                                </CardActions>
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

export default connect(mapStateToProps)(Dashboard);