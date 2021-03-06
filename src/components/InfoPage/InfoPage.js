import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import { triggerLogout } from '../../redux/actions/loginActions';
// import { fetchUser } from '../../redux/actions/userActions';

class GroupItem extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_USER'
    });
    this.getCountOfShelfItems();
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }
  getCountOfShelfItems = () => {
    this.props.dispatch({
      type: 'GROUP_ITEM'
    })
    console.log(this.props);
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    this.props.history.push('home');
  }

  render() {
    let content = null;
    let groupData = this.props.state.groupItem.map((item)=>{
      return (<tr className='groupItem' key={item.username}><td>{item.username}</td><td>{item.count}</td></tr>)
    })
    if (this.props.user.userName) {
      content = (
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Items on shelf</th>
              </tr>
            </thead>
            <tbody>
              {groupData}
            </tbody>
          </table>
        </div>
      );
    }

    return (
      <div>
        
        <Nav />
        { content }
        <button
          onClick={this.logout}
        >
          Log Out
          </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  state
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(GroupItem);
