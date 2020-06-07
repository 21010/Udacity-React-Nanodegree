import React from 'react';
import PropTypes from 'prop-types';
import BackButton from './BackButton';
import CreateContactForm from './CreateContactForm';

function CreateContact(props) {
    return (
        <section>
            <BackButton />
            <CreateContactForm
                addContact={props.addContact} 
            />
        </section>
    )
}

CreateContact.propTypes = {
    addContact: PropTypes.func.isRequired
}

export default CreateContact;