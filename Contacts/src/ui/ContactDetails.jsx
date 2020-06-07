import React from 'react';
import PropTypes from 'prop-types';

function ContactDetails(props) {
    return (
        <div className="contact-details">
            <p className="contact-details-name">{props.name}</p>
            <p className="contact-details-handle">{props.handle}</p>
        </div>
    )
}

ContactDetails.propTypes = {
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired
}

export default ContactDetails;