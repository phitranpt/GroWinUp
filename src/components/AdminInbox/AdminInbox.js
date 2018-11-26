import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../Style/Style.css';

import AdminInboxInput from './AdminInboxInput';

class AdminInbox extends Component {

    //GET list of completed task pending for feedback
    componentDidMount() {
        console.log('getting completed todo list from child');
        this.props.dispatch( { type: 'GET_COMPLETED_TASK'} )
    }

    render() {
        return (
            <div className="main">
                <h1>Admin Inbox</h1>
                {this.props.reduxState.completeList.map(feedback => {
                    return (
                      <AdminInboxInput 
                      feedbackObject={feedback}
                      key={feedback.id} 
                      />  
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(AdminInbox);