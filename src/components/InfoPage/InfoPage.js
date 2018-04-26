import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios'

import Nav from '../../components/Nav/Nav';
import { fetchUser } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  fetchUser,
};

class GroupItem extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.getCountOfShelfItems();
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }
getCountOfShelfItems = () => {
  axios.get('/api/shelf/count').then((response)=>{
    let countOfShelfItemsByUser = response
    console.log(response);
    
  }).catch((error)=>{
    console.log('error in getCountOfShelfItems: ', error);
  });
  // this.props.dispatch({
  //   type: 'GET_ALL_BY_USER'
  // })
}
  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <p>
            Info Page
          </p>
        </div>
      );
    }

    return (
      <div>
        <Nav />
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps, mapDispatchToProps)(GroupItem);
