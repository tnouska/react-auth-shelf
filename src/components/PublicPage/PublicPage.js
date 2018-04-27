import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { fetchUser } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

import PublicPageMap from './PublicPageMap';

const mapStateToProps = state => ({
    user: state.user,
    state
});

class PublicList extends Component {
    componentDidMount() {
        // this.props.dispatch(fetchUser());
        this.props.dispatch({
            type: 'GET_ITEMS'
        })
    }

    // componentDidUpdate() {
    //   if (!this.props.user.isLoading && this.props.user.userName === null) {
    //     this.props.history.push('home');
    //   }
    // }

    logout = () => {
        this.props.dispatch(triggerLogout());
        // this.props.history.push('home');
    }

    render() {
        let content = null;

        if (this.props.user.userName) {
            content = (
                <div>
                    <h1
                        id="welcome"
                    >
                        Welcome, {this.props.user.userName}!
          </h1>
                    <button
                        onClick={this.logout}
                    >
                        Log Out
          </button>
                </div>
            );
        }

        return (
            <div>
                <Nav />
                {content}
                <PublicPageMap />
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(PublicList);

