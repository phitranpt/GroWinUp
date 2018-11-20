import React, { Component } from 'react';
import { connect } from 'react-redux';
import SuggestedTask from './SuggestedTask';
import ToDo from './ToDo';

class AddTask extends Component {

    render() {
        return (
            <div>
                <SuggestedTask />
                <ToDo />
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(AddTask);