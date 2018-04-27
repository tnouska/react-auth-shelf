import React, { Component } from 'react';
import { connect } from 'react-redux';

import PublicPageList from './PublicPageList';

const mapStateToProps = state => ({
    state
});

class PublicPageMap extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let viewList = this.props.state.viewShelf.map((view) => {
            return (<PublicPageList key={view.id} view={view} />)
        })

        return (
            <div>
                {viewList}
            </div>
        );
    }
}

export default connect(mapStateToProps)(PublicPageMap);