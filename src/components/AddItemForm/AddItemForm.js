import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { fetchUser } from '../../redux/actions/userActions';
import axios from 'axios';


class AddItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemInputs: {
                description: '',
                image_url: ''
            }
        }
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_USER'
        });
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    handleInput = (propertyName) => {
        return (event) => {          
            this.setState({
                itemInputs: {
                    ...this.state.itemInputs,
                    [propertyName]: event.target.value,
                }
            })
        }
    }

    addNewItem = (event) => {
        event.preventDefault();
        console.log(this.state.itemInputs);
        this.props.dispatch({
            type: 'ADD_ITEM',
            payload: this.state.itemInputs,
        })
    }

    render() {
        return (
            <div>
                <Nav />
                <h1>Holla</h1>
                <form onSubmit={this.addNewItem}>
                    <input placeholder = "Description" type = "text" value = {this.state.description} onChange = {this.handleInput("description")} />
                    <input placeholder = "Image URL" type = "text" value = {this.state.image_url}  onChange = {this.handleInput("image_url")}/>
                    <button type = "submit">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user, //this shortens state.user to user (so we can use this.props.user)
    state
})

export default connect(mapStateToProps)(AddItemForm);