import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../Style/Style.css';

class StarRating extends Component {

    //GET list of star rating per person
    componentDidMount() {
        this.props.dispatch( { type: 'GET_STAR_RATING', payload: this.props.personObject.id } )
    }

    render() {
        return (
            <div>
                <p>Rating</p>
                {this.props.reduxState.ratingList.map(rating => {
                    return (
                        <p>{rating.round}</p>
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(StarRating);