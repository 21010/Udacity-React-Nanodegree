import React from 'react';
import PropTypes from 'prop-types';

function ContactRemoveButton(props) {
    return (
        <button className="contact-remove" onClick={() => props.onDeleteContact(props.id)}>Remove</button>
    )
}

ContactRemoveButton.propTypes = {
    id: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}

export default ContactRemoveButton;