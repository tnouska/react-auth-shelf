import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    state
});

class PublicPageList extends Component {
   
    render() {

        return (
            <div className="View">
                <h4>{this.props.view.description}</h4>
                <img src={this.props.view.image_url} />
            </div>
        );
    }
}

export default connect(mapStateToProps)(PublicPageList);