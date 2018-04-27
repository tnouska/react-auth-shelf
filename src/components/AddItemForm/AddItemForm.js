import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { fetchUser } from '../../redux/actions/userActions';
import axios from 'axios';
import ReactFilestack, { client} from 'filestack-react'
import filestack from 'filestack-js';


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
        this.props.dispatch({
            type: 'ADD_ITEM',
            payload: this.state.itemInputs,
        })
    }

    handleUpload = (result) => {
        console.log('pic success', result)
        this.setState({
            itemInputs: {
                description: this.state.itemInputs.description,
                image_url: result.filesUploaded[0].url
            }
        })
        console.log(this.state.itemInputs)
    }

    render() {
        const client = filestack.init('Abo8DFBkZSpyD4vfMRU4mz', [options]);
        const apikey = 'Abo8DFBkZSpyD4vfMRU4mz';
        const options = {
            accept: 'image/*',
            maxFiles: 1,
            storeTo: {
                location: 's3'
            }
        }
        return (
            <div>
                <Nav />
                <h1>Holla</h1>
                <form onSubmit={this.addNewItem}>
                    <input placeholder = "Description" type = "text" value = {this.state.description} onChange = {this.handleInput("description")} />
                    <input placeholder = "Image URL" type = "text" value = {this.state.image_url}  onChange = {this.handleInput("image_url")}/>
                    <button type = "submit">Submit</button>
                </form>
                <ReactFilestack
                    apikey={apikey}
                    buttonText="Add Pic"
                    buttonClass="classname"
                    options={options}
                    onSuccess={this.handleUpload}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state
})

export default connect(mapStateToProps)(AddItemForm);