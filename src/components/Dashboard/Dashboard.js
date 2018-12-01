import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Style/Style.css';
import Card from '@material-ui/core/Card';
import { CardContent, Typography, CardActions, CardMedia } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import propTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import UserPage from '../UserPage/UserPage';
import swal from 'sweetalert2';

const styles = theme => ({
    media: {
        height: '30vh',
        maxHeight: '500px',
        width: '30vh',
        maxWidth: '310px',
        margin: "auto",
        backgroundColor: '#cee1ff'
    },
    name: {
        fontSize: '1.3em',
        textAlign: 'center',
        fontWeight: 200,
    },
    button: {
        justifyContent: 'center',
        position: 'relative',
        bottom: 0,
        float: 'bottom'
    },
    card: {
        height: 450,
        width: 310,
        margin: 10,
        display: 'inline-block',
    },
  });

class Dashboard extends Component {

    //navigates admin to users addTask page
    addTask = (id) => {
        console.log('person id is:', id);
        this.props.dispatch( { type: 'GET_TODO', payload: id } )
        this.props.dispatch( { type: 'GET_TASK' } )
        this.props.history.push('/addTask')
    }

    //DELETE person from list
    deleteProfile = (id) => {
        console.log('delete btn!');
        swal({
            title: 'Are you sure?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete Forever!',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if(result.value) {
                this.props.dispatch( { type: 'DELETE_PERSON', payload: id} )
                swal({
                    title: 'Success!',
                    text: 'They have been banished from your kingdom',
                    type: 'success'
                })
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal({
                    title: 'Okay',
                    text: 'The animal kingdom has been saved!',
                    type: 'info'
                })
            }
        })
    }

    //GET list of people and rating
    componentDidMount() {
        this.props.dispatch( { type: 'GET_PERSON' } )
    }

    render() {
        const { classes } = this.props;

        return (
            <div className="main">
            <UserPage />
                {this.props.reduxState.personList.map(person => {
                    return (
                        <Card className={classes.card} key={person.id}>
                            <CardMedia
                            className={classes.media}
                            image={person.profile_image}
                            title="Profile Image"
                            />
                            <CardContent>
                                <Typography className={classes.name}>
                                    {person.username}
                                </Typography>
                                <Typography className={classes.name}>
                                    {person.round}
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.button}>
                                <Button size="small" color="primary" onClick={()=> this.addTask(person.id)}>
                                    Add Task
                                </Button>
                                <Button size="small" color="secondary" onClick={()=> this.deleteProfile(person.id)}>
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

Dashboard.propTypes = {
    classes: propTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(Dashboard));