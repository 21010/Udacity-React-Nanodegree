import React from 'react';
import PropTypes from 'prop-types';

const contactAvatarStyle = (uri) => ({ backgroundImage: `url(${uri})` });

function ContactAvatar(props) {
    return <div className="contact-avatar" style={contactAvatarStyle(props.avatarURL)}></div>
}

ContactAvatar.propTypes = {
    avatarURL: PropTypes.string.isRequired
}

export default ContactAvatar;