import React from 'react';
import { Link } from 'react-router-dom';

function BackButton(props) {
    return (
        <Link className='close-create-contact' to='/' >
            Close
        </Link>
    )
}

export default BackButton;