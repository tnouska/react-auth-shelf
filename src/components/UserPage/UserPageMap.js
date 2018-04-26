import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserPageList from './UserPageList';

const mapStateToProps = state => ({
  state
});

class UserPageMap extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    let viewList = this.props.state.viewShelf.map((view) => {
      return (<UserPageList key={view.id} view={view}/>)
    })

    return(
      <div>
        {viewList}
      </div>
    );
  }
}

export default connect(mapStateToProps)(UserPageMap);