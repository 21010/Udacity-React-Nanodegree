import React from 'react';
import PropTypes from 'prop-types';

import ContactAvatar from './ContactAvatar';
import ContactDetails from './ContactDetails';
import ContactRemoveButton from './ContactRemoveButton';

function Contact(props) {
    return (
        <li className="contact-list-item">
            <ContactAvatar avatarURL={props.contact.avatarURL} />
            <ContactDetails name={props.contact.name} handle={props.contact.handle} />
            <ContactRemoveButton id={props.contact.id} onDeleteContact={props.onDeleteContact} />
        </li>
    )     
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}

export default Contact;