import React from 'react';
import PropTypes from 'prop-types';
import ImageInput from './ImageInput';
import serializeForm from 'form-serialize';

class CreateContactForm extends React.Component {
    
    static propTypes = {
        addContact: PropTypes.func.isRequired
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, { hash: true });
        this.props.addContact(values);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className='create-contact-form'>
                <ImageInput 
                    className='create-contact-avatar-input' 
                    name='avatarURL' 
                    maxHeight={64} 
                />
                <div className='create-contact-details'>
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="handle" placeholder="Handle" />
                    <button>Add Contact</button>
                </div>
            </form>
        )
    }
}

export default CreateContactForm;