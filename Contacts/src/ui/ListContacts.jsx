import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';

function ListContacts(props) {
    return (
        <ul className="contact-list">
            {props.showingContacts.map(contact => <Contact key={contact.id} contact={contact} onDeleteContact={props.onDeleteContact} />)}
        </ul>
    )
}

ListContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    showingContacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}

export default ListContacts;