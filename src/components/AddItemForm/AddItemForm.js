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
        axios.post('/api/shelf', this.state.itemInputs).then((response) => {
            console.log('success posting');
        }).catch((error) => {
            console.log('failure')
        })
    }

    render() {
        return (
            <div>
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

export default AddItemForm;