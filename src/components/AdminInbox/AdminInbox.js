import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Card from '@material-ui/core/Card';
// import { CardContent, Typography, CardActionArea } from '@material-ui/core';

class AdminInbox extends Component {

    render() {
        return (
            <div>
                <h1>This is the Admin Inbox</h1>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(AdminInbox);