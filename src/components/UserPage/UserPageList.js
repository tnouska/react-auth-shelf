import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  state
});

class UserPageList extends Component {
  constructor(props) {
    super(props)
  }

  render(){

    return(
      <div className="View">
        <h4>{this.props.view.description}</h4>
          <img src={this.props.view.image_url} />
          <button>Delete</button>
        </div>
    );
  }
}

export default connect(mapStateToProps)(UserPageList);