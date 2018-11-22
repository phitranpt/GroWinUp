import React, { Component } from 'react';
import { connect } from 'react-redux';
import SuggestedTask from './SuggestedTask';
import ToDo from './ToDo';
import { Add } from '@material-ui/icons';

class AddTask extends Component {

    addNewTask = () => {
        this.props.history.push('/addNewTask')
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.props.reduxState)}
                <Add onClick={this.addNewTask}/>
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