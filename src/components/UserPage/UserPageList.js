import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  state
});

class UserPageList extends Component {
  constructor(props) {
    super(props)
    this.state= {
      isEditing: false,
      description: '',
      image: '',
    }
  }
  handleClick =()=>{
    console.log('clicked ', this.state.view);
    this.props.dispatch({
      type: 'DELETE_ITEM',
      payload: this.props.view
    })
  }
  handleClickEdit =()=>{
      this.setState({
        isEditing: true
      })

    console.log('editing? ', this.state.isEditing);
  }
  handleSubmit = ()=>{
    this.props.dispatch({
      type: 'EDIT_ITEM',
      payload: {description: this.state.description, image: this.state.image, id: this.props.view.id, person_id: this.props.view.person_id}
    })
    this.setState({
      isEditing: false
    })
  }
  handleChangeFor = (type) =>{
    return (event)=>{
      this.setState({
        ...this.state,
        [type]: event.target.value
      })
      console.log(this.state);
    }
  }

  showEditing =()=>{

    if(this.state.isEditing){
      return(
        <div>
          <input type="text" onChange={this.handleChangeFor("description")}/>
          <input type="text" placeholder="image url" onChange={this.handleChangeFor("image")}/>
          <button onClick={this.handleSubmit}>submit</button>
        </div>
      )
    return null;

    }
  }
  render(){

    return(
      <div className="View">
        <h4>{this.props.view.description}</h4>
          <img src={this.props.view.image_url} />
          {this.showEditing()}
          <button onClick={this.handleClick}>Delete</button>
          <button onClick={this.handleClickEdit}>Edit</button>
        </div>
    );
  }
}

export default connect(mapStateToProps)(UserPageList);